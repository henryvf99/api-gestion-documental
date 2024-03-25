import {
    CREATE_EMITIDOS_USE_CASE,
    GET_ALL_EMITIDOS_USE_CASE,
    GET_EMITIDOS_USE_CASE,
    DELETE_EMITIDOS_USE_CASE,
    UPDATE_EMITIDOS_USE_CASE,
  } from "@container/container";
  import { EmitidosDto } from "@core/dtos/Emitidos.dto";
  import {
    CreateEmitidosUseCase,
    DeleteEmitidosUseCase,
    GetAllEmitidosUseCase,
    GetEmitidosUseCase,
    UpdateEmitidosUseCase
  } from "@core/use-case";
  import { Inject } from "@decorators/di";
  import {
    Body,
    Controller,
    Get,
    Delete,
    Params,
    Post,
    Put,
    Request,
    Response,
  } from "@decorators/express";
  import {
    JwtMiddleware,
    ValidateEmitidosMiddleware,
  } from "@infrastructure/middlewares";
  import { plainToClass } from "class-transformer";
  import { Request as IRequest, Response as IResponse } from "express";
  import { uploadMiddleware, attachFileToBody } from '@infrastructure/helpers/multer-config'
  
  @Controller("/emitidos")
  export class EmitidosController {
    constructor(
      @Inject(CREATE_EMITIDOS_USE_CASE)
      private readonly createEmitidosUseCase: CreateEmitidosUseCase,
      @Inject(GET_ALL_EMITIDOS_USE_CASE)
      private readonly getAllEmitidosUseCase: GetAllEmitidosUseCase,
      @Inject(GET_EMITIDOS_USE_CASE)
      private readonly getEmitidosUseCase: GetEmitidosUseCase,
      @Inject(UPDATE_EMITIDOS_USE_CASE)
      private readonly updateEmitidosUseCase: UpdateEmitidosUseCase,
      @Inject(DELETE_EMITIDOS_USE_CASE)
      private readonly deleteEmitidosUseCase: DeleteEmitidosUseCase
    ) {}
  
    @Post("", [JwtMiddleware, ValidateEmitidosMiddleware, uploadMiddleware, attachFileToBody])
    async create(
      @Request() req: IRequest,
      @Response() res: IResponse,
      @Body() body
    ) {
      const item = await this.createEmitidosUseCase.execute({
        ...body
      });
      res.status(200).json({ success: true, data: item });
    }
  
    @Get("", [JwtMiddleware])
    async getAll(@Request() req: IRequest, @Response() res: IResponse) {
      const item = await this.getAllEmitidosUseCase.execute();
      res.status(200).send({ success: true, data: item });
    }
  
    @Get("/:id", [JwtMiddleware])
    async get(
      @Request() req: IRequest,
      @Response() res: IResponse,
      @Params("id") id: string | number
    ) {
      const item = await this.getEmitidosUseCase.execute(id);
      res.json({ success: true, data: item });
    }
  
    @Put("/:id", [JwtMiddleware, ValidateEmitidosMiddleware, uploadMiddleware, attachFileToBody])
    async update(
      @Request() req: IRequest,
      @Response() res: IResponse,
      @Params("id") id: string | number
    ) {
      const data = plainToClass(EmitidosDto, req.body);
      const item = await this.updateEmitidosUseCase.execute({ id, data });
      res.json({ success: true, data: item });
    }
  
    @Delete("/:id", [JwtMiddleware])
    async delete(
      @Request() req: IRequest,
      @Response() res: IResponse,
      @Params("id") id: string | number
    ) {
      const message = await this.deleteEmitidosUseCase.execute(id);
      res.status(200).send({ success: true, data: message });
    }
  
  }
  