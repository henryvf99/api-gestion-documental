import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { MES_REPOSITORY } from "@container/container";
import { MesRepository } from "@core/domain/repositories";

@Injectable()
export class CreateMesUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(MES_REPOSITORY)
    private readonly mesRepository: MesRepository
  ) {}

  async execute(data) {
    return this.mesRepository.create(data);
  }
}
