import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { CARGO_REPOSITORY } from "@container/container";
import { CargoRepository } from "@core/domain/repositories";

@Injectable()
export class CreateCargoUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(CARGO_REPOSITORY)
    private readonly cargoRepository: CargoRepository
  ) {}

  async execute(data) {
    return this.cargoRepository.create(data);
  }
}
