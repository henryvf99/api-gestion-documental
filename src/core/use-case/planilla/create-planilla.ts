import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { PLANILLA_REPOSITORY } from "@container/container";
import { PlanillaRepository } from "@core/domain/repositories";

@Injectable()
export class CreatePlanillaUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(PLANILLA_REPOSITORY)
    private readonly planillaRepository: PlanillaRepository
  ) {}

  async execute(data) {
    return this.planillaRepository.create(data);
  }
}
