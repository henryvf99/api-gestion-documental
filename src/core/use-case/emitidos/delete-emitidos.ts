import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { EMITIDOS_REPOSITORY } from "@container/container";
import { EmitidosRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeleteEmitidosUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(EMITIDOS_REPOSITORY)
    private readonly emitidosRepository: EmitidosRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.emitidosRepository.get(id);
    if (!data) {
      throw new Error(`The documento emitido with the id: ${id} does not found.`);
    }

    await this.emitidosRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
