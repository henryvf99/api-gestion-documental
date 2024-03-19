import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { BOLETA_REPOSITORY } from "@container/container";
import { BoletaRepository } from "@core/domain/repositories";

@Injectable()
export class UpdateBoletaUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(BOLETA_REPOSITORY)
    private readonly boletaRepository: BoletaRepository
  ) {}
  async execute(payload: any) {
    const data = await this.boletaRepository.get(payload.id);
    if (!data) {
      throw new Error(`The boleta with the id: ${payload.id} does not found.`);
    }
    return this.boletaRepository.update(payload.id, payload.data);
  }
}