import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TIPODOCUMENTO_REPOSITORY } from "@container/container";
import { TipodocumentoRepository } from "@core/domain/repositories";

@Injectable()
export class GetTipodocumentoUseCase implements UseCase<string | number, any, any, any> {
  constructor(
    @Inject(TIPODOCUMENTO_REPOSITORY)
    private readonly tipodocumentoRepository: TipodocumentoRepository
  ) {}

  async execute(id: string | number): Promise<any> {
    const data = await this.tipodocumentoRepository.get(id);
    if (!data) {
      throw new Error(`The tipo documento with the id: ${id} does not found.`);
    }
    return data;
  }
}