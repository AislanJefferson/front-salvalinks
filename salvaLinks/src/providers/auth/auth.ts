import { Injectable } from '@angular/core';
import { UsuarioProvider } from '../usuario/usuario';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private email: string;
  private logado: boolean;



  constructor(private usuarioProvider : UsuarioProvider) {
    this.logado = false;
    console.log('Hello AuthProvider Provider');
  }

  autenticado() {
    return this.logado && this.usuarioProvider.getTokenHeader();
  }

  autentica(email: string) {
    this.email = email;
    this.logado = true;
  }

  logoff() {
    this.email = "";
    this.logado = false;
    this.usuarioProvider.setTokenHeader("");
  }

  getEmail() {
    return this.logado ? this.email : "";
  }

}
