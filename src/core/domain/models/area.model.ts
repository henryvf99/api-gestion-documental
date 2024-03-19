import mongoose from "mongoose";
import mongoose_autopopulate from "mongoose-autopopulate";
import uniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;

interface AreaAttrs {
  nombre: string;
  descripcion: string;
  status: boolean;
}

export interface AreaDoc extends mongoose.Document {
  nombre: string;
  descripcion: string;
  status: boolean;
}

interface AreaModel extends mongoose.Model<AreaDoc> {
  build(attrs: AreaAttrs): AreaDoc;
}

const areaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "The name is required."],
      unique: true
    },
    descripcion: {
      type: String,
      required: false
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

areaSchema.plugin(mongoose_autopopulate);
areaSchema.plugin(uniqueValidator, { message: "The name already exists." });
export const Area = mongoose.model<AreaDoc, AreaModel>("area", areaSchema);
