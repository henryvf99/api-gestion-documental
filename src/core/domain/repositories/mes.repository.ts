import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Mes, MesDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class MesRepository extends BaseRepository {
  mes: Model<MesDoc>;
  constructor() {
    super(Mes);
    this.mes = Mes;
  }
}