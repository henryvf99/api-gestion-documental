import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Emitidos, EmitidosDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class EmitidosRepository extends BaseRepository {
  emitidos: Model<EmitidosDoc>;
  constructor() {
    super(Emitidos);
    this.emitidos = Emitidos;
  }
}