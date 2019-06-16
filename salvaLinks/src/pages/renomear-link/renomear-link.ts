import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';
import { AlertController } from 'ionic-angular';
import { ListaLinksPage } from '../lista-links/lista-links';
import { Link } from '../inserir-link/inserir-link';

/**
 * Generated class for the RenomearLinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-renomear-link',
  templateUrl: 'renomear-link.html',
})
export class RenomearLinkPage {
  model: Link;
  public nomeAtual: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public alertCtrl: AlertController) {
    this.model = new Link();
    this.nomeAtual = this.navParams.get('nomeLink');
  }

  renomearLink() {
    if (this.authProvider.autenticado()) {
      this.usuarioProvider.renomearLink(this.navParams.get('url'), this.model.name).
      subscribe((result: any) => {
        var response = result.json();
        console.log(response);
        this.navCtrl.setRoot(ListaLinksPage);
      },
      (error) => {
        console.log(error);
      });
    } 
    else {
      this.navCtrl.setRoot(LoginUsuarioPage);
    }
  }

}
