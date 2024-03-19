import { Inject, Injectable } from "@decorators/di";
import { UseCase } from "@libs/contracts/use-case";
import { TIPODOCUMENTO_REPOSITORY } from "@container/container";
import { TipodocumentoRepository } from "@core/domain/repositories";

@Injectable()
export class CreateTipodocumentoUseCase implements UseCase<any, any, any, any> {
  constructor(
    @Inject(TIPODOCUMENTO_REPOSITORY)
    private readonly tipodocumentoRepository: TipodocumentoRepository
  ) {}

  async execute(data) {
    return this.tipodocumentoRepository.create(data);
  }
}
