import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { AREA_REPOSITORY } from "@container/container";
import { AreaRepository } from "@core/domain/repositories";

@Injectable()
export class UpdateAreaUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(AREA_REPOSITORY)
    private readonly areaRepository: AreaRepository
  ) {}
  async execute(payload: any) {
    const data = await this.areaRepository.get(payload.id);
    if (!data) {
      throw new Error(`The area with the id: ${payload.id} does not found.`);
    }
    return this.areaRepository.update(payload.id, payload.data);
  }
}