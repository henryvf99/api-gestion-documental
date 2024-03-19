import { Injectable } from "@decorators/di/lib";
import { ErrorMiddleware } from "@decorators/express";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class ServerErrorMiddleware implements ErrorMiddleware {
  use(error: any, request: Request, response: Response, next: NextFunction): Response {
    const httpStatus = error.status || 500;
    return response.status(httpStatus).send({
      status: httpStatus,
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
