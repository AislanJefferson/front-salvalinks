import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController) {
    this.model = new User();
  }

  redirectSignup(){
    this.navCtrl.setRoot(CadastroUsuarioPage);
  }

  loginUsuario() {
    this.usuarioProvider.logarUsuario(this.model.email, this.model.password).subscribe((result: any) => {
      var respOK = result.json();
      this.authProvider.autentica(respOK.email);
    }, (error) => {
      var resp = error.json()
      let toast = this.toastCtrl.create({
        message: resp.message,
        duration: 3000
      });
      toast.present();
      this.model.email = "";
      this.model.password = "";
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginUsuarioPage');
  }

}
export class User {
  email: string;
  password: string;
}