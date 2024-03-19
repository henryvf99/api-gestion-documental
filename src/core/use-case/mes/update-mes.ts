import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { MES_REPOSITORY } from "@container/container";
import { MesRepository } from "@core/domain/repositories";

@Injectable()
export class UpdateMesUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(MES_REPOSITORY)
    private readonly mesRepository: MesRepository
  ) {}
  async execute(payload: any) {
    const data = await this.mesRepository.get(payload.id);
    if (!data) {
      throw new Error(`The mes with the id: ${payload.id} does not found.`);
    }
    return this.mesRepository.update(payload.id, payload.data);
  }
}