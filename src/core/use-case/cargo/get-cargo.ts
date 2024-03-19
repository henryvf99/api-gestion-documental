import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { CARGO_REPOSITORY } from "@container/container";
import { CargoRepository } from "@core/domain/repositories";

@Injectable()
export class GetCargoUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(CARGO_REPOSITORY)
    private readonly cargoRepository: CargoRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const data = await this.cargoRepository.get(id);
    if (!data) {
      throw new Error(`The cargo with the id: ${id} does not found.`);
    }
    return data;
  }
}