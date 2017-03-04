export class Credentials {

  username: string;
  password: string;

  constructor(username?: string, password?: string) {
    this.username = username;
    this.password = password;
  }

  encrypt() : string {
    return window.btoa(this.username + ':' + this.password);
  }

  valid() {
    return this.username && this.password;
  }

}
