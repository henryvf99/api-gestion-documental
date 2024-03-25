import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { RECIBIDOS_REPOSITORY } from "@container/container";
import { RecibidosRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeleteRecibidosUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(RECIBIDOS_REPOSITORY)
    private readonly recibidosRepository: RecibidosRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.recibidosRepository.get(id);
    if (!data) {
      throw new Error(`The documento recibido with the id: ${id} does not found.`);
    }

    await this.recibidosRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
