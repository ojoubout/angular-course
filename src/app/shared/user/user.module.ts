
export class UserModule {
  userName: string;
  active: boolean;
  constructor(userName: string, active: boolean) {
    this.userName = userName;
    this.active = active;
  }
}
