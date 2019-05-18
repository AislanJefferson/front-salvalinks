import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private email : string;
  private logado : boolean;

  
  constructor() {
    this.logado = false;
    console.log('Hello AuthProvider Provider');
  }

  autenticado(){
    return this.logado;
  }

  autentica(email:string){
    this.email = email;
    this.logado = true;
  }

  logoff(){
    this.email = "";
    this.logado = false;
  }

  getEmail(){
    return this.logado ? this.email : "";
  }

}
