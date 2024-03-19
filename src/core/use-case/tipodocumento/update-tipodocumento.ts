import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TIPODOCUMENTO_REPOSITORY } from "@container/container";
import { TipodocumentoRepository } from "@core/domain/repositories";

@Injectable()
export class UpdateTipodocumentoUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(TIPODOCUMENTO_REPOSITORY)
    private readonly tipodocumentoRepository: TipodocumentoRepository
  ) {}
  async execute(payload: any) {
    const data = await this.tipodocumentoRepository.get(payload.id);
    if (!data) {
      throw new Error(`The tipo documento with the id: ${payload.id} does not found.`);
    }
    return this.tipodocumentoRepository.update(payload.id, payload.data);
  }
}