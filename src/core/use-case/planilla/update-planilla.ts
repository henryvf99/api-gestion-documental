import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { PLANILLA_REPOSITORY } from "@container/container";
import { PlanillaRepository } from "@core/domain/repositories";

@Injectable()
export class UpdatePlanillaUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(PLANILLA_REPOSITORY)
    private readonly planillaRepository: PlanillaRepository
  ) {}
  async execute(payload: any) {
    const data = await this.planillaRepository.get(payload.id);
    if (!data) {
      throw new Error(`The planilla with the id: ${payload.id} does not found.`);
    }
    return this.planillaRepository.update(payload.id, payload.data);
  }
}