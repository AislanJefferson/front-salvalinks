import { Http } from '@angular/http';
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

  cadastrarUsuario(name: string, email: string, password: string) {
    const url = 'https://salvalinks.herokuapp.com/users/cadastrar'
  
      var dados = {
        name: name,
        email: email,
        password: password
      }

      return this.http.post(url, dados);
    
  }

  exibirUsuariosCadastrados() {
    return this.http.get("https://salvalinks.herokuapp.com/users")
  }
}
