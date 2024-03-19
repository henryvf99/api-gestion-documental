import { TrabajadorDto } from "@core/dtos/trabajador.dto";
import { Injectable } from "@decorators/di";
import { Middleware } from "@decorators/express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class ValidateTrabajadorMiddleware implements Middleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const data = plainToClass(TrabajadorDto, req.body);
    validate(data).then((errors) => {
      if (errors.length > 0) {
        res.status(500).send({
          success: false,
          message: errors.map((err) => err.constraints),
        });
      } else {
        next();
      }
    });
  }
}