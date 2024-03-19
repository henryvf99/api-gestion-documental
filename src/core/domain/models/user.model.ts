import mongoose from "mongoose";
import mongoose_autopopulate from "mongoose-autopopulate";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcrypt";
import { RolDoc } from '@core/domain/models';
const { Schema } = mongoose;

interface UserAttrs {
  email: string;
  password: string;
  rol: RolDoc;
}

export interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  rol: RolDoc;
  isValidPassword: (password: string) => Promise<any>;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "El email es requerido"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "El password es requerido"],
    },
    rol: {
      type: mongoose.Types.ObjectId,
      ref: "rol",
      autopopulate: true,
      required: [true, "The role is required."]
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

userSchema.methods.isValidPassword = async function (password: string) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

userSchema.plugin(mongoose_autopopulate);
userSchema.plugin(uniqueValidator, { message: "Debe ser unico." });
export const User = mongoose.model<UserDoc, UserModel>("user", userSchema);