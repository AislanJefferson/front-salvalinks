import { Http, Headers, RequestOptions } from '@angular/http';
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
  private httpHeader = new Headers();
  private options;
  private links: Intent[];

  constructor(public http: Http) {
    console.log('Hello UsuarioProvider Provider');
    this.httpHeader.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.httpHeader });
    this.links = [];
  }

  cadastrarUsuario(name: string, email: string, password: string) {
    var dados = {
      name: name,
      email: email,
      password: password
    }

    return this.http.post(this.baseApiPath + "users/register", dados,this.options);
  }

  logarUsuario(email: string, password: string) {
    var url = this.baseApiPath + 'users/login?email=' + email + '&password=' + password;
    return this.http.post(url, this.options);
  }

  getNomeUsuario() {
    var url = this.baseApiPath + '/users/getusername';
    return this.http.get(url, this.options);
  }
  
  enviarEmail(email: string) {
    var url = this.baseApiPath + 'redefine?email=' + email;

    return this.http.post(url, this.options);
  }

  exibirUsuariosCadastrados() {
    return this.http.get(this.baseApiPath + "users",this.options);
  }

  insereLink(email: string, linkName: string, href: string, importance: string) {
    var url = this.baseApiPath + 'links/add';
    var link = {
      name: linkName == null ? "" : linkName,
      href: href,
      importance: importance
    }
    return this.http.post(url, link,this.options);
  }

  exibirLinksCadastrados(email: string) {
    var url = this.baseApiPath + 'links';
    return this.http.get(url, this.options);
  }

  renomearLink(url: string, nomeNovo: string) {
    var url1 = this.baseApiPath + 'links/rename?url=' + url + '&newName=' + nomeNovo;
    
    return this.http.put(url1, "", this.options);
  }

  deletarLink(email: string, href: string) {
    var url = this.baseApiPath + 'links/remove?&url=' + href;
    return this.http.delete(url, this.options);
  }

  setTokenHeader(token: string){
    this.options.headers.delete('Authorization');
    this.options.headers.append('Authorization','Bearer '+ token);
  }

  addLinkExterno(titulo: string, link: string) {
    this.links.push(new Intent(titulo, link));
  }

  getlinkExterno(): Intent {
    return this.links.pop();
  }

  temLinkAInserir() {
    return this.links.length > 0;
  }

}

export class Intent {
  constructor(public titulo: string, public link: string) {
    this.titulo = titulo;
    this.link = link;
  }
}