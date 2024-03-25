import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { PRACTICANTES_REPOSITORY } from "@container/container";
import { PracticantesRepository } from "@core/domain/repositories";

@Injectable()
export class UpdatePracticantesUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(PRACTICANTES_REPOSITORY)
    private readonly practicantesRepository: PracticantesRepository
  ) {}
  async execute(payload: any) {
    const data = await this.practicantesRepository.get(payload.id);
    if (!data) {
      throw new Error(`The practicante with the id: ${payload.id} does not found.`);
    }
    return this.practicantesRepository.update(payload.id, payload.data);
  }
}