import { Injectable } from '@angular/core';

/*
  Generated class for the DadosUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let dados_key_name = "dados";
let lista_key_name = "lista";

@Injectable()
export class DadosUsuarioProvider {

  private dados = {
    email: "",
    password: ""
  }

  constructor() {
  }

  getDados(): any {
    return localStorage.getItem(dados_key_name);
  }

  setDados(email: string, password: string) {
    let dados = {
      email: "",
      password: ""
    }
    dados.email = email;
    dados.password = password;

    localStorage.setItem(dados_key_name, JSON.stringify(dados));
  }

  getLinks() {
    return localStorage.getItem(lista_key_name);
  }

  setLinks(links: any) {
    let lista = {
      links: ""
    }
    
    lista.links = links

    localStorage.setItem(lista_key_name, JSON.stringify(lista));
  }
}


