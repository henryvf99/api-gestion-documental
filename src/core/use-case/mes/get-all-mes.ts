import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { MES_REPOSITORY } from "@container/container";
import { MesRepository } from "@core/domain/repositories";

@Injectable()
export class GetAllMesUseCase implements UseCase<any, any, any, any[]> {
  constructor(
    @Inject(MES_REPOSITORY)
    private readonly mesRepository: MesRepository
  ) {}

  async execute(): Promise<any[]> {
    return this.mesRepository.getAll();
  }
}