import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TRABAJADOR_REPOSITORY } from "@container/container";
import { TrabajadorRepository } from "@core/domain/repositories";

@Injectable()
export class UpdateTrabajadorUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(TRABAJADOR_REPOSITORY)
    private readonly trabajadorRepository: TrabajadorRepository
  ) {}
  async execute(payload: any) {
    const trabajador = await this.trabajadorRepository.get(payload.id);
    if (!trabajador) {
      throw new Error(`The employed with the id: ${payload.id} does not found.`);
    }
    return this.trabajadorRepository.update(payload.id, payload.data);
  }
}