import { Injectable } from "@decorators/di";
import { Model } from "mongoose";
import { Area, AreaDoc } from "../models";
import { BaseRepository } from "./base.repository";

@Injectable()
export class AreaRepository extends BaseRepository {
  area: Model<AreaDoc>;
  constructor() {
    super(Area);
    this.area = Area;
  }
}
