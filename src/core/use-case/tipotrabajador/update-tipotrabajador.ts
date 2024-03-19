import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TIPOTRABAJADOR_REPOSITORY } from "@container/container";
import { TipotrabajadorRepository } from "@core/domain/repositories";

@Injectable()
export class UpdateTipotrabajadorUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(TIPOTRABAJADOR_REPOSITORY)
    private readonly tipotrabajadorRepository: TipotrabajadorRepository
  ) {}
  async execute(payload: any) {
    const data = await this.tipotrabajadorRepository.get(payload.id);
    if (!data) {
      throw new Error(`The tipo trabajador with the id: ${payload.id} does not found.`);
    }
    return this.tipotrabajadorRepository.update(payload.id, payload.data);
  }
}