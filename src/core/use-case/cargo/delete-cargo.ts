import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { CARGO_REPOSITORY } from "@container/container";
import { CargoRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeleteCargoUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(CARGO_REPOSITORY)
    private readonly cargoRepository: CargoRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.cargoRepository.get(id);
    if (!data) {
      throw new Error(`The cargo with the id: ${id} does not found.`);
    }

    await this.cargoRepository.update(id, Status);

    return "Successfully deleted.";
  }
}
