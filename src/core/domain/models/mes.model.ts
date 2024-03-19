import mongoose from "mongoose";
import mongoose_autopopulate from "mongoose-autopopulate";
import uniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;

interface MesAttrs {
  nombre: string;
  descripcion: string;
  status: boolean;
}

export interface MesDoc extends mongoose.Document {
  nombre: string;
  descripcion: string;
  status: boolean;
}

interface MesModel extends mongoose.Model<MesDoc> {
  build(attrs: MesAttrs): MesDoc;
}

const mesSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El mes es requerido."],
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

mesSchema.plugin(mongoose_autopopulate);
mesSchema.plugin(uniqueValidator, { message: "Ya existe el mes" });
export const Mes = mongoose.model<MesDoc, MesModel>("mes", mesSchema);
