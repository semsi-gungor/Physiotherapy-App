export class AuthRequiredError extends Error {
  constructor(message = "Bu sayfaya erişim için izin gerekmektedir.") {
    super(message);
    this.name = "AuthRequiredError";
  }
}
