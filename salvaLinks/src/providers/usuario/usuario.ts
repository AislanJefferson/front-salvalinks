import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let token_key_name = "token";

@Injectable()
export class UsuarioProvider {

  private baseApiPath = "https://salvalinks.herokuapp.com/";
  private httpHeader = new Headers();
  private options;
  private links: Intent[];
  private token = "";

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
    return this.http.post(this.baseApiPath + "users/register", dados, this.options);
  }

  contadorLinks() {
    var url = this.baseApiPath + '/users/numberoflinks';
    return this.http.get(url, this.options);
  }


  contadorGrupos() {
    var url = this.baseApiPath + '/users/numberofgroups';
    return this.http.get(url, this.options);
  }

  getNomeUsuario() {
    var url = this.baseApiPath + '/users/getusername';
    return this.http.get(url, this.options);
  }

  enviarEmail(email: string) {
    var url = this.baseApiPath + 'redefine?email=' + email;
    return this.http.post(url, this.options);
  }

  logarUsuario(email: string, password: string) {
    var url = this.baseApiPath + 'users/login?email=' + email + '&password=' + password;
    return this.http.post(url, this.options);
  }

  exibirUsuariosCadastrados() {
    return this.http.get(this.baseApiPath + "users", this.options);
  }

  insereLink(email: string, linkName: string, href: string, importance: string) {
    var url = this.baseApiPath + 'links/add?email=' + email;
    var link = {
      name: linkName == null ? "" : linkName,
      href: href,
      importance: importance
    }
    return this.http.post(url, link, this.options);
  }

  exibirLinksCadastrados(email: string) {
    var url = this.baseApiPath + 'links?email=' + email;
    return this.http.get(url, this.options);
  }

  renomearLink(email: string, url: string, nomeAtual: string, nomeNovo: string) {
    var url = this.baseApiPath + 'links/rename?newName=' + encodeURIComponent(nomeNovo) + '&url=' + encodeURIComponent(url);
    console.log(url);
    return this.http.put(url, "", this.options);
  }

  deletarLink(email: string, href: string) {
    var url = this.baseApiPath + 'links/remove?url=' + encodeURIComponent(href);
    return this.http.delete(url, this.options);
  }

  setTokenHeader(token: string) {
    let str = token;
    this.options.headers.delete('Authorization');
    this.options.headers.append('Authorization', 'Bearer ' + str);

    localStorage.setItem(token_key_name, str);
  }

  getTokenHeader() {
    return localStorage.getItem(token_key_name);
  }

  addLinkExterno(titulo: string, link: string) {
    this.links[0] = (new Intent(titulo, link));
  }

  getlinkExterno(): Intent {
    let item = this.links[0];
    this.links = [];
    return item;
  }

  temLinkAInserir() {
    return this.links.length > 0;
  }

  //GRUPOS

  grupoGetTodos() {
    return this.http.get(this.baseApiPath + "group/getall", this.options);
  }

  grupoGetAllNames() {
    return this.http.get(this.baseApiPath + "group/getnames", this.options);
  }

  grupoGetLinks(nomeDoGrupo: string) {
    return this.http.get(this.baseApiPath + "group/links?name=" + nomeDoGrupo, this.options);
  }

  grupoGetPDF(nomeDoGrupo: string) {
    return this.http.get(this.baseApiPath + "group/pdf?name=" + nomeDoGrupo, this.options);
  }

  grupoCriar(nomeDoGrupo: string) {
    var url = this.baseApiPath + "group/create?name=" + nomeDoGrupo;
    return this.http.put(url, "", this.options);
  }

  grupoDeletar(nomeDoGrupo: string) {
    var url = this.baseApiPath + "group/delete?name=" + nomeDoGrupo;
    return this.http.put(url, "", this.options);
  }

  grupoRenomear(nomeDoGrupo: string, nomeNovo: string) {
    var url = this.baseApiPath + "group/rename?name=" + nomeDoGrupo + "&newName=" + nomeNovo;
    return this.http.put(url, "", this.options);
  }

  grupoAddLink(nomeDoGrupo: string, linkID: string) {
    var url = this.baseApiPath + "group/addlink?name=" + nomeDoGrupo + "&id=" + linkID;
    return this.http.put(url, "", this.options);
  }

  grupoRemoveLink(nomeDoGrupo: string, linkID: string) {
    var url = this.baseApiPath + "group/removelink?name=" + nomeDoGrupo + "&id=" + linkID;
    return this.http.put(url, "", this.options);
  }

  // PARA PAG DE CONFIG

  renomearUsuario(nomeNovo: string) {
    var url = this.baseApiPath + "/users/rename?newName=" + nomeNovo;
    return this.http.put(url, "", this.options);
  }

  mudarSenha(senhaAtual: string, novaSenha: string) {
    var url = this.baseApiPath + "/users/changepassword?oldPassword=" + senhaAtual + "&newPassword=" + novaSenha;
    return this.http.put(url, "", this.options);
  }



}

export class Intent {
  constructor(public titulo: string, public link: string) {
    this.titulo = titulo;
    this.link = link;
  }
}