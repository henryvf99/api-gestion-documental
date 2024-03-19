import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { PLANILLA_REPOSITORY } from "@container/container";
import { PlanillaRepository } from "@core/domain/repositories";

@Injectable()
export class GetPlanillaUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(PLANILLA_REPOSITORY)
    private readonly planillaRepository: PlanillaRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const data = await this.planillaRepository.get(id);
    if (!data) {
      throw new Error(`The planilla with the id: ${id} does not found.`);
    }
    return data;
  }
}