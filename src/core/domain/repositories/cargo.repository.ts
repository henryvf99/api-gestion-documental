import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Cargo, CargoDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class CargoRepository extends BaseRepository {
  cargo: Model<CargoDoc>;
  constructor() {
    super(Cargo);
    this.cargo = Cargo;
  }
}