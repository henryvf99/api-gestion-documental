import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TRABAJADOR_REPOSITORY } from "@container/container";
import { TrabajadorRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeleteTrabajadorUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(TRABAJADOR_REPOSITORY)
    private readonly trabajadorRepository: TrabajadorRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const employed = await this.trabajadorRepository.get(id);
    if (!employed) {
      throw new Error(`The employed with the id: ${id} does not found.`);
    }

    await this.trabajadorRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
