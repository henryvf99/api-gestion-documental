import mongoose from "mongoose";
import mongoose_autopopulate from "mongoose-autopopulate";
import uniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;

interface CargoAttrs {
  nombre: string;
  descripcion: string;
  status: boolean;
}

export interface CargoDoc extends mongoose.Document {
  nombre: string;
  descripcion: string;
  status: boolean;
}

interface CargoModel extends mongoose.Model<CargoDoc> {
  build(attrs: CargoAttrs): CargoDoc;
}

const cargoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El cargo es requerido."],
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

cargoSchema.plugin(mongoose_autopopulate);
cargoSchema.plugin(uniqueValidator, { message: "Ya existe el cargo" });
export const Cargo = mongoose.model<CargoDoc, CargoModel>("cargo", cargoSchema);
