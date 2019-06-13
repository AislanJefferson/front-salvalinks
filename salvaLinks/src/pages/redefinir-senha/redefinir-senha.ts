import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AuthProvider } from '../../providers/auth/auth';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';

/**
 * Generated class for the RedefinirSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redefinir-senha',
  templateUrl: 'redefinir-senha.html',
})
export class RedefinirSenhaPage {

  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController, public dadosUsuarioProvider: DadosUsuarioProvider) {
    this.model = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedefinirSenhaPage');
  }

  irParaLogin() {
    this.navCtrl.setRoot(LoginUsuarioPage);
  }

  
}

export class User {
  email: string;
}