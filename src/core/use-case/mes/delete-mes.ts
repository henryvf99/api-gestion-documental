import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { MES_REPOSITORY } from "@container/container";
import { MesRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeleteMesUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(MES_REPOSITORY)
    private readonly mesRepository: MesRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.mesRepository.get(id);
    if (!data) {
      throw new Error(`The mes with the id: ${id} does not found.`);
    }

    await this.mesRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
