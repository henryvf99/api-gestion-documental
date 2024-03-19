import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TRABAJADOR_REPOSITORY } from "@container/container";
import { TrabajadorRepository } from "@core/domain/repositories";

@Injectable()
export class CreateTrabajadorUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(TRABAJADOR_REPOSITORY)
    private readonly trabajadorRepository: TrabajadorRepository
  ) {}

  async execute(data) {
    return this.trabajadorRepository.create(data);
  }
}
