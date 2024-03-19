import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Planilla, PlanillaDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class PlanillaRepository extends BaseRepository {
  planilla: Model<PlanillaDoc>;
  constructor() {
    super(Planilla);
    this.planilla = Planilla;
  }
}