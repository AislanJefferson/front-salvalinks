import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { AuthProvider } from '../../providers/auth/auth';
import { ListaLinksPage } from '../lista-links/lista-links';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
import { InserirLinkPage } from '../inserir-link/inserir-link';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController, public dadosUsuarioProvider: DadosUsuarioProvider) {
    this.model = new User();
  }

  loginUsuario() {
    this.dadosUsuarioProvider.setDados(this.model.email, this.model.password)
    let dados = JSON.parse(this.dadosUsuarioProvider.getDados());
    console.log(dados)
    
    this.usuarioProvider.logarUsuario(dados.email, dados.password).subscribe((result: any) => {
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
    this.navCtrl.setRoot(CadastroUsuarioPage,"https://salvalinks.herokuapp.com/users/register");
  }

}
export class User {
  email: string;
  password: string;
}
