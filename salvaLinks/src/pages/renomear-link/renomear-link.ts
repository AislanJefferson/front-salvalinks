import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';
import { ListaLinksPage } from '../lista-links/lista-links';
import { Link } from '../inserir-link/inserir-link';
import { OnesignalProvider } from '../../providers/onesignal/onesignal';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController, private notificador: OnesignalProvider) {
    this.model = new Link();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenomearLinkPage');
  }

  renomearLink(nomeAtual) {
    if (this.authProvider.autenticado()) {
      let toast = this.toastCtrl.create({
        duration: 3000
      });
      if (this.model.tempo) {
        this.notificador.cadastrarNotificacaoLeitura(this.navParams.get('nomeLink'), this.navParams.get('url'), this.navParams.get('importance'), this.model.tempo);
        toast.setMessage("Noficação agendada com sucesso!")
      }
      if (this.model.name) {
        this.usuarioProvider.renomearLink(this.authProvider.getEmail(), this.navParams.get('url'), this.navParams.get('nomeLink'), this.model.name).
          subscribe((result: any) => {
            var response = result.json();
            toast.setMessage("Link modificado com sucesso!");
          },
            (error) => {
              console.log(error)
            });
      }
      if (toast.name) toast.present();
      this.navCtrl.setRoot(ListaLinksPage);
    } else {
      this.navCtrl.setRoot(LoginUsuarioPage);
    }
  }

}
