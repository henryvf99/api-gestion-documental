import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TIPOTRABAJADOR_REPOSITORY } from "@container/container";
import { TipotrabajadorRepository } from "@core/domain/repositories";

@Injectable()
export class GetAllTipotrabajadorUseCase implements UseCase<any, any, any, any[]> {
  constructor(
    @Inject(TIPOTRABAJADOR_REPOSITORY)
    private readonly tipotrabajadorRepository: TipotrabajadorRepository
  ) {}

  async execute(): Promise<any[]> {
    return this.tipotrabajadorRepository.getAll();
  }
}