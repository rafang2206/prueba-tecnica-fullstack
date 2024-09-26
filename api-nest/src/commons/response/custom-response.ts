export class CustomResponse {
  public message: string;
  public data: any;

  constructor(message: string, data: any) {
    this.message = message;
    this.data = data;
  }
}
