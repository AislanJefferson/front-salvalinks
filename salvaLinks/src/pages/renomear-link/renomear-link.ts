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

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public alertCtrl: AlertController) {
    this.model = new Link();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenomearLinkPage');
  }

  renomearLink(nomeAtual) {
    if (this.authProvider.autenticado()) {
      this.usuarioProvider.renomearLink(this.authProvider.getEmail(), this.navParams.get('url'), this.navParams.get('nomeLink'), this.model.name).
        subscribe((result: any) => {
          var response = result.json();
          console.log(response);

          const alert = this.alertCtrl.create({
            title: 'Link Renomeado!',
            subTitle: 'Link foi renomeado na sua lista de links!',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.setRoot(ListaLinksPage);
        },
          (error) => {
            console.log(error)
          });

    } else {
      this.navCtrl.setRoot(LoginUsuarioPage);
    }
  }

}
