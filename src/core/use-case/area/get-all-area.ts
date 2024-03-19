import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { AREA_REPOSITORY } from "@container/container";
import { AreaRepository } from "@core/domain/repositories";

@Injectable()
export class GetAllAreaUseCase implements UseCase<any, any, any, any[]> {
  constructor(
    @Inject(AREA_REPOSITORY)
    private readonly areaRepository: AreaRepository
  ) {}

  async execute(): Promise<any[]> {
    return this.areaRepository.getAll();
  }
}