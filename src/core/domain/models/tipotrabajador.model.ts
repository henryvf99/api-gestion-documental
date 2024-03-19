import mongoose from "mongoose";
import mongoose_autopopulate from "mongoose-autopopulate";
import uniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;

interface TipotrabajadorAttrs {
  nombre: string;
  descripcion: string;
  status: boolean;
}

export interface TipotrabajadorDoc extends mongoose.Document {
  nombre: string;
  descripcion: string;
  status: boolean;
}

interface TipotrabajadorModel extends mongoose.Model<TipotrabajadorDoc> {
  build(attrs: TipotrabajadorAttrs): TipotrabajadorDoc;
}

const tipotrabajadorSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido."],
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

tipotrabajadorSchema.plugin(mongoose_autopopulate);
tipotrabajadorSchema.plugin(uniqueValidator, { message: "Ya existe un tipo con ese nombre" });
export const Tipotrabajador = mongoose.model<TipotrabajadorDoc, TipotrabajadorModel>("tipotrabajador", tipotrabajadorSchema);
