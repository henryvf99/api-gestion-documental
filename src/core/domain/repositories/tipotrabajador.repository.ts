import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Tipotrabajador, TipotrabajadorDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class TipotrabajadorRepository extends BaseRepository {
  tipotrabajador: Model<TipotrabajadorDoc>;
  constructor() {
    super(Tipotrabajador);
    this.tipotrabajador = Tipotrabajador;
  }
}