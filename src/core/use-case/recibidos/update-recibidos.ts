import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { RECIBIDOS_REPOSITORY } from "@container/container";
import { RecibidosRepository } from "@core/domain/repositories";

@Injectable()
export class UpdateRecibidosUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(RECIBIDOS_REPOSITORY)
    private readonly recibidosRepository: RecibidosRepository
  ) {}
  async execute(payload: any) {
    const data = await this.recibidosRepository.get(payload.id);
    if (!data) {
      throw new Error(`The documento recibido with the id: ${payload.id} does not found.`);
    }
    return this.recibidosRepository.update(payload.id, payload.data);
  }
}