import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { PLANILLA_REPOSITORY } from "@container/container";
import { PlanillaRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeletePlanillaUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(PLANILLA_REPOSITORY)
    private readonly planillaRepository: PlanillaRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.planillaRepository.get(id);
    if (!data) {
      throw new Error(`The planilla with the id: ${id} does not found.`);
    }

    await this.planillaRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
