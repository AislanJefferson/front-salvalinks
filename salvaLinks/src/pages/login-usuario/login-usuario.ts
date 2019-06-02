import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { AuthProvider } from '../../providers/auth/auth';
import { ListaLinksPage } from '../lista-links/lista-links';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
import { InserirLinkPage } from '../inserir-link/inserir-link';

/**
 * Generated class for the LoginUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-usuario',
  templateUrl: 'login-usuario.html',
})
export class LoginUsuarioPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController) {
    this.model = new User();
  }

  loginUsuario() {
    this.usuarioProvider.logarUsuario(this.model.email, this.model.password).subscribe((result: any) => {
      this.usuarioProvider.setTokenHeader(result._body);
      this.authProvider.autentica(this.model.email);
      if (this.usuarioProvider.temLinkAInserir()) this.navCtrl.setRoot(InserirLinkPage);
      else
        this.navCtrl.setRoot(ListaLinksPage);
    }, (error) => {
      var resp = error.json()
      let toast = this.toastCtrl.create({
        message: resp.message,
        duration: 3000
      });
      toast.present();
    });
    this.model.email = "";
    this.model.password = "";
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginUsuarioPage');
  }

  irParaCadastro() {
    this.navCtrl.setRoot(CadastroUsuarioPage);
  }

}
export class User {
  email: string;
  password: string;
}
