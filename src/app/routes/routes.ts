import {
  HelloWorldController,
  AuthController,
  UserController,
  RolController,
  AnioController,
  AreaController,
  CargoController,
  MesController,
  TipodocumentoController,
  TipotrabajadorController,
  BoletaController,
  PlanillaController,
  TrabajadorController,
  PracticantesController,
  EmitidosController,
  RecibidosController
} from "@app/controllers";
import { attachControllers } from "@decorators/express";
import express from "express";

class Routes {
  private apiRouter: express.Router;
  constructor() {
    this.apiRouter = express.Router();
  }
  start(): express.Router {
    attachControllers(this.apiRouter, [
      HelloWorldController,
      AuthController,
      UserController,
      RolController,
      AnioController,
      AreaController,
      CargoController,
      MesController,
      TipodocumentoController,
      TipotrabajadorController,
      BoletaController,
      PlanillaController,
      TrabajadorController,
      PracticantesController,
      EmitidosController,
      RecibidosController
    ]);
    return this.apiRouter;
  }
}

export const routes = new Routes().start();
