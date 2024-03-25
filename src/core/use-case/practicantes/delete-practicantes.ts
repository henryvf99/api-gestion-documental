import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { PRACTICANTES_REPOSITORY } from "@container/container";
import { PracticantesRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeletePracticantesUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(PRACTICANTES_REPOSITORY)
    private readonly practicantesRepository: PracticantesRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.practicantesRepository.get(id);
    if (!data) {
      throw new Error(`The practicante with the id: ${id} does not found.`);
    }

    await this.practicantesRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
