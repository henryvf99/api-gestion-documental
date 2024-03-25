import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { EMITIDOS_REPOSITORY } from "@container/container";
import { EmitidosRepository } from "@core/domain/repositories";

@Injectable()
export class UpdateEmitidosUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(EMITIDOS_REPOSITORY)
    private readonly emitidosRepository: EmitidosRepository
  ) {}
  async execute(payload: any) {
    const data = await this.emitidosRepository.get(payload.id);
    if (!data) {
      throw new Error(`The documento emitido with the id: ${payload.id} does not found.`);
    }
    return this.emitidosRepository.update(payload.id, payload.data);
  }
}