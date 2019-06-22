import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { Grupo } from '../inserir-grupo/inserir-grupo';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';
import { ListaGruposPage } from '../lista-grupos/lista-grupos';
/**
 * Generated class for the RenomearGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-renomear-grupo',
  templateUrl: 'renomear-grupo.html',
})
export class RenomearGrupoPage {
  model: Grupo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController) {
    this.model = new Grupo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenomearGrupoPage');
  }

  renomearGrupo() {
    if (this.authProvider.autenticado()) {
      console.log("Nome do Grupo =>" + this.navParams.get('nomeAtualDoGrupo'));
      this.usuarioProvider.grupoRenomear(this.navParams.get('nomeAtualDoGrupo'), this.model.name).
        subscribe((result: any) => {
          this.navCtrl.setRoot(ListaGruposPage);
        },
          (error) => {
            console.log(error)
          });
    } else {
      this.navCtrl.setRoot(LoginUsuarioPage);
    }
  }

}
