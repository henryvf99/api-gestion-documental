import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { RECIBIDOS_REPOSITORY } from "@container/container";
import { RecibidosRepository } from "@core/domain/repositories";

@Injectable()
export class GetRecibidosUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(RECIBIDOS_REPOSITORY)
    private readonly recibidosRepository: RecibidosRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const data = await this.recibidosRepository.get(id);
    if (!data) {
      throw new Error(`The documento recibido with the id: ${id} does not found.`);
    }
    return data;
  }
}