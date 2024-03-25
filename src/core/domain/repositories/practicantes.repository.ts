import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Practicantes, PracticantesDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class PracticantesRepository extends BaseRepository {
  practicantes: Model<PracticantesDoc>;
  constructor() {
    super(Practicantes);
    this.practicantes = Practicantes;
  }
}