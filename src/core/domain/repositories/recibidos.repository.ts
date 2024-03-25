import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Recibidos, RecibidosDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class RecibidosRepository extends BaseRepository {
  recibidos: Model<RecibidosDoc>;
  constructor() {
    super(Recibidos);
    this.recibidos = Recibidos;
  }
}