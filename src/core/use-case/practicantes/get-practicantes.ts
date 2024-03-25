import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { PRACTICANTES_REPOSITORY } from "@container/container";
import { PracticantesRepository } from "@core/domain/repositories";

@Injectable()
export class GetPracticantesUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(PRACTICANTES_REPOSITORY)
    private readonly practicantesRepository: PracticantesRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const data = await this.practicantesRepository.get(id);
    if (!data) {
      throw new Error(`The practicante with the id: ${id} does not found.`);
    }
    return data;
  }
}