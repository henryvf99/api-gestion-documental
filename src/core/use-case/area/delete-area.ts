import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { AREA_REPOSITORY } from "@container/container";
import { AreaRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeleteAreaUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(AREA_REPOSITORY)
    private readonly areaRepository: AreaRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.areaRepository.get(id);
    if (!data) {
      throw new Error(`The area with the id: ${id} does not found.`);
    }

    await this.areaRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
