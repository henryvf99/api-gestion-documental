export interface UseCase<TUseCasePort1, TUseCasePort2, TUseCasePort3, TUseCaseResult> {
  execute(port1?: TUseCasePort1, port2?: TUseCasePort2, port3?: TUseCasePort3): Promise<TUseCaseResult>;
}