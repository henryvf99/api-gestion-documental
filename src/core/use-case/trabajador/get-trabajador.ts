import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TRABAJADOR_REPOSITORY } from "@container/container";
import { TrabajadorRepository } from "@core/domain/repositories";

@Injectable()
export class GetTrabajadorUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(TRABAJADOR_REPOSITORY)
    private readonly trabajadorRepository: TrabajadorRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const employed = await this.trabajadorRepository.get(id);
    if (!employed) {
      throw new Error(`The employed with the id: ${id} does not found.`);
    }
    return employed;
  }
}