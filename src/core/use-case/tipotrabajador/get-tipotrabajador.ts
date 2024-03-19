import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TIPOTRABAJADOR_REPOSITORY } from "@container/container";
import { TipotrabajadorRepository } from "@core/domain/repositories";

@Injectable()
export class GetTipotrabajadorUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(TIPOTRABAJADOR_REPOSITORY)
    private readonly tipotrabajadorRepository: TipotrabajadorRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const data = await this.tipotrabajadorRepository.get(id);
    if (!data) {
      throw new Error(`The tipo trabajador with the id: ${id} does not found.`);
    }
    return data;
  }
}