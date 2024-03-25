import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { RECIBIDOS_REPOSITORY } from "@container/container";
import { RecibidosRepository } from "@core/domain/repositories";

@Injectable()
export class CreateRecibidosUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(RECIBIDOS_REPOSITORY)
    private readonly recibidosRepository: RecibidosRepository
  ) {}

  async execute(data) {
    return this.recibidosRepository.create(data);
  }
}
