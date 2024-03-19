import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TIPODOCUMENTO_REPOSITORY } from "@container/container";
import { TipodocumentoRepository } from "@core/domain/repositories";
import { Status } from '@infrastructure/helpers/status';

@Injectable()
export class DeleteTipodocumentoUseCase implements UseCase<string | number, any, any, string> {
  constructor(
    @Inject(TIPODOCUMENTO_REPOSITORY)
    private readonly tipodocumento: TipodocumentoRepository
  ) {}

  async execute(id: string | number): Promise<string> {
    const data = await this.tipodocumento.get(id);
    if (!data) {
      throw new Error(`The tipo documento with the id: ${id} does not found.`);
    }

    await this.tipodocumento.update(id, Status);

    return "Successfully deleted.";
  }
}
