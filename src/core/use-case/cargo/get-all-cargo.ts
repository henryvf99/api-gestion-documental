import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { CARGO_REPOSITORY } from "@container/container";
import { CargoRepository } from "@core/domain/repositories";

@Injectable()
export class GetAllCargoUseCase implements UseCase<any, any, any, any[]> {
  constructor(
    @Inject(CARGO_REPOSITORY)
    private readonly cargoRepository: CargoRepository
  ) {}

  async execute(): Promise<any[]> {
    return this.cargoRepository.getAll();
  }
}