import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider: UsuarioProvider, public toastCtrl: ToastController, public dadosUsuarioProvider: DadosUsuarioProvider) {
    this.model = new User();
  }

  irParaLogin() {
    this.navCtrl.push(LoginUsuarioPage);
  }
  
  enviarEmail() {
    this.usuarioProvider.enviarEmail(this.model.email)
    .subscribe((result) => {
      let toast = this.toastCtrl.create({
        message: "Enviamos um email de redefinição para você",
        duration: 5000
      });
      toast.present();
    },
      (error) => {
        let toast = this.toastCtrl.create({
          message: "Email invalido, tente novamente",
          duration: 3000
        });
        toast.present();
      })
    this.model.email = "";
  }
  
}

export class User {
  email: string;
}