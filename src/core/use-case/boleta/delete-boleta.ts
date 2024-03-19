import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { BOLETA_REPOSITORY } from "@container/container";
import { BoletaRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeleteBoletaUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(BOLETA_REPOSITORY)
    private readonly boletaRepository: BoletaRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.boletaRepository.get(id);
    if (!data) {
      throw new Error(`The boleta with the id: ${id} does not found.`);
    }

    await this.boletaRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
