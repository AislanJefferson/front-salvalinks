import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroUsuarioPage } from './../cadastro-usuario/cadastro-usuario';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';
import { ListaLinksPage} from '../lista-links/lista-links';

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
  abrirListaDeLinks(){
    this.navCtrl.setRoot(ListaLinksPage);
  }

}
