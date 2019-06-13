import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroUsuarioPage } from './../cadastro-usuario/cadastro-usuario';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';
import { RedefinirSenhaPage } from '../redefinir-senha/redefinir-senha';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  abrirTelaDeCadastro() {
    this.navCtrl.setRoot(CadastroUsuarioPage);
  }
  abrirTelaDeLogin(){
    this.navCtrl.setRoot(LoginUsuarioPage);
  }

  irParaRedefinir() {
    this.navCtrl.setRoot(RedefinirSenhaPage)
  }
}
