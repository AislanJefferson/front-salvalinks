import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public http: Http) {
    console.log('Hello UsuarioProvider Provider');
  }

  private baseApiPath = "https://salvalinks.herokuapp.com/";
  cadastrarUsuario(name: string, email: string, password: string) {
    var dados = {
      name: name,
      email: email,
      password: password
    }

    return this.http.post("https://salvalinks.herokuapp.com/users/cadastrar", dados);
  }

  logarUsuario(email: string, password: string) {
    var url = this.baseApiPath + 'users/logar?email=' + email + '&password=' + password;
    return this.http.post(url, { headers: { 'Content-Type': 'application/json' } });
  }

  exibirUsuariosCadastrados() {
    return this.http.get("https://salvalinks.herokuapp.com/users");
  }

  insereLink(email: string, linkName: string, href: string, importance: string) {
    var url = this.baseApiPath + 'links/add?email=' + email;
    var link = {
      name: linkName == null ? "" : linkName,
      href: href,
      importance: importance
    }
    return this.http.post(url, link);
  }

}
