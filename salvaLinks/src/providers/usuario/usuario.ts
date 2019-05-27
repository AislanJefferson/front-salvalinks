import { Http,Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  private baseApiPath = "https://salvalinks.herokuapp.com/";
  private httpHeader= new Headers();
  private options;

  constructor(public http: Http) {
    console.log('Hello UsuarioProvider Provider');
    this.httpHeader.append('Content-Type', 'application/json');
    this.options =  new RequestOptions({headers: this.httpHeader});
    }

  cadastrarUsuario(name: string, email: string, password: string) {
    var dados = {
      name: name,
      email: email,
      password: password
    }

    return this.http.post(this.baseApiPath + "users/register", dados);
  }

  logarUsuario(email: string, password: string) {
    var url = this.baseApiPath + 'users/login?email=' + email + '&password=' + password;
    return this.http.post(url, this.options);
  }

  exibirUsuariosCadastrados() {
    return this.http.get(this.baseApiPath + "users");
  }

  insereLink(email: string, linkName: string, href: string, importance: string) {
    var url = this.baseApiPath + 'links/add?email=' + email;
    var link = {
      name: linkName == null ? "" : linkName,
      href: href,
      importance: importance
    }
    console.log(link);
    return this.http.post(url, link);
  }

  exibirLinksCadastrados(email: string) {
    var url = this.baseApiPath + 'links?email=' + email;
    return this.http.get(url,this.options);
  }

  renomearLink(email: string, nomeAtual: string, nomeNovo: string){
    var url = this.baseApiPath + 'links/rename?email=' + email + '&name=' + nomeAtual + '&newName=' +  nomeNovo;
    
    return this.http.put(url,this.options);
  }

  deletarLink(email: string, nome:string){
    var url = this.baseApiPath + 'links/remove?email=' + email + '&name=' + nome;
    return this.http.delete(url,this.options);
  }
}
