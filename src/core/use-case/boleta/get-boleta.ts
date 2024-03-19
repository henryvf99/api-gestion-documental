import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { BOLETA_REPOSITORY } from "@container/container";
import { BoletaRepository } from "@core/domain/repositories";

@Injectable()
export class GetBoletaUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(BOLETA_REPOSITORY)
    private readonly boletaRepository: BoletaRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const data = await this.boletaRepository.get(id);
    if (!data) {
      throw new Error(`The boleta with the id: ${id} does not found.`);
    }
    return data;
  }
}