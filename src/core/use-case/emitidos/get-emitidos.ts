import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { EMITIDOS_REPOSITORY } from "@container/container";
import { EmitidosRepository } from "@core/domain/repositories";

@Injectable()
export class GetEmitidosUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(EMITIDOS_REPOSITORY)
    private readonly emitidosRepository: EmitidosRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const data = await this.emitidosRepository.get(id);
    if (!data) {
      throw new Error(`The documento emitido with the id: ${id} does not found.`);
    }
    return data;
  }
}