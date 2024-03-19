import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { AREA_REPOSITORY } from "@container/container";
import { AreaRepository } from "@core/domain/repositories";

@Injectable()
export class GetAreaUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(AREA_REPOSITORY)
    private readonly areaRepository: AreaRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const data = await this.areaRepository.get(id);
    if (!data) {
      throw new Error(`The area with the id: ${id} does not found.`);
    }
    return data;
  }
}