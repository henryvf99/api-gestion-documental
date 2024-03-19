import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Boleta, BoletaDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class BoletaRepository extends BaseRepository {
  boleta: Model<BoletaDoc>;
  constructor() {
    super(Boleta);
    this.boleta = Boleta;
  }
}