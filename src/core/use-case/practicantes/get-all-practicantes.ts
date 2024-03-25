import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { PRACTICANTES_REPOSITORY } from "@container/container";
import { PracticantesRepository } from "@core/domain/repositories";

@Injectable()
export class GetAllPracticantesUseCase implements UseCase<any, any, any, any[]> {
  constructor(
    @Inject(PRACTICANTES_REPOSITORY)
    private readonly practicantesRepository: PracticantesRepository
  ) {}

  async execute(): Promise<any[]> {
    return this.practicantesRepository.getAll();
  }
}