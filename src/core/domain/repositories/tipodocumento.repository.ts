import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Tipodocumento, TipodocumentoDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class TipodocumentoRepository extends BaseRepository {
  tipodocumento: Model<TipodocumentoDoc>;
  constructor() {
    super(Tipodocumento);
    this.tipodocumento = Tipodocumento;
  }
}