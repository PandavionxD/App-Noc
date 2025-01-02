export interface CheckServiceUseCases {
  start: (url: string) => Promise<boolean>;
}

type successCallback = () => void;
type errorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCases {
  constructor(
    private readonly successCallback: successCallback,
    private readonly errorCallback: errorCallback
  ) {}

  public async start(url: string) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Ups, algo salio muy mal");
      }
      this.successCallback()
      return true;
    } catch (error) {
        this.errorCallback(error.message)
      return false;
    }
  }
}
