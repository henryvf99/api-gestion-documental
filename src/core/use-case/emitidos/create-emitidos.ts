import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { EMITIDOS_REPOSITORY } from "@container/container";
import { EmitidosRepository } from "@core/domain/repositories";

@Injectable()
export class CreateEmitidosUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(EMITIDOS_REPOSITORY)
    private readonly emitidosRepository: EmitidosRepository
  ) {}

  async execute(data) {
    return this.emitidosRepository.create(data);
  }
}
