import { Component } from '@angular/core';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';

/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {
  model: User;
  public listaUsuarios = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider) {
    this.model = new User();
  }

  cadastrarUsuario() {
    this.usuarioProvider.cadastrarUsuario(this.model.name, this.model.email, this.model.password).
    subscribe((result: any) => {
      result.json();
      this.irParaLogin();
    },
    (error) => {
      error.json();
    });

  }

  irParaLogin(){
    this.navCtrl.setRoot(LoginUsuarioPage);
  }

  exibirUsuariosCadastrados() {
    this.usuarioProvider.exibirUsuariosCadastrados().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body)
        this.listaUsuarios = objeto_retorno.results;

        console.log(objeto_retorno)
      }, error => {
        console.log(error)
      }
    )
  }

}

export class User {
  name: string;
  email: string;
  password: string;
}