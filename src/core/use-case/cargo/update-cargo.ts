import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { CARGO_REPOSITORY } from "@container/container";
import { CargoRepository } from "@core/domain/repositories";

@Injectable()
export class UpdateCargoUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(CARGO_REPOSITORY)
    private readonly cargoRepository: CargoRepository
  ) {}
  async execute(payload: any) {
    const data = await this.cargoRepository.get(payload.id);
    if (!data) {
      throw new Error(`The cargo with the id: ${payload.id} does not found.`);
    }
    return this.cargoRepository.update(payload.id, payload.data);
  }
}