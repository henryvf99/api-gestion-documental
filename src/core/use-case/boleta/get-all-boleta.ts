import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { BOLETA_REPOSITORY } from "@container/container";
import { BoletaRepository } from "@core/domain/repositories";

@Injectable()
export class GetAllBoletaUseCase implements UseCase<any, any, any, any[]> {
  constructor(
    @Inject(BOLETA_REPOSITORY)
    private readonly boletaRepository: BoletaRepository
  ) {}

  async execute(): Promise<any[]> {
    return this.boletaRepository.getAll();
  }
}