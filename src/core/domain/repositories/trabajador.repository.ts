import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Trabajador, TrabajadorDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class TrabajadorRepository extends BaseRepository {
  trabajador: Model<TrabajadorDoc>;
  constructor() {
    super(Trabajador);
    this.trabajador = Trabajador;
  }
}
