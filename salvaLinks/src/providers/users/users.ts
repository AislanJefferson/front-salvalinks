import { Http } from "@angular//http";
import { Injectable } from '@angular/core';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }

  cadastrarUsuairo(name: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      var dados = {
        name: name,
        email: email,
        password: password
      }

      this.http.post("salvalinks.herokuapp.com/users/cadastrar", dados)
      .subscribe((resultado: any) => {
        resolve(resultado.json());
      }, (error) => {
        reject(error.json());
      })
    });
  }
  
}
