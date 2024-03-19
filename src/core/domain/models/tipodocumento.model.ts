import mongoose from "mongoose";
import mongoose_autopopulate from "mongoose-autopopulate";
import uniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;

interface TipodocumentoAttrs {
  nombre: string;
  descripcion: string;
  status: boolean;
}

export interface TipodocumentoDoc extends mongoose.Document {
  nombre: string;
  descripcion: string;
  status: boolean;
}

interface TipodocumentoModel extends mongoose.Model<TipodocumentoDoc> {
  build(attrs: TipodocumentoAttrs): TipodocumentoDoc;
}

const tipodocumentoSchema = new Schema(
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

tipodocumentoSchema.plugin(mongoose_autopopulate);
tipodocumentoSchema.plugin(uniqueValidator, { message: "Ya existe un tipo con ese nombre" });
export const Tipodocumento = mongoose.model<TipodocumentoDoc, TipodocumentoModel>("tipodocumento", tipodocumentoSchema);
