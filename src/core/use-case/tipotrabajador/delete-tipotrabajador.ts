import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TIPOTRABAJADOR_REPOSITORY } from "@container/container";
import { TipotrabajadorRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeleteTipotrabajadorUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(TIPOTRABAJADOR_REPOSITORY)
    private readonly tipotrabajadorRepository: TipotrabajadorRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.tipotrabajadorRepository.get(id);
    if (!data) {
      throw new Error(`The tipo trabajador with the id: ${id} does not found.`);
    }

    await this.tipotrabajadorRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
