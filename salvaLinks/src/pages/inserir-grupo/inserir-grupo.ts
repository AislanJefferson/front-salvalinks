import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';
import { ListaGruposPage } from '../lista-grupos/lista-grupos';


/**
 * Generated class for the InserirGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserir-grupo',
  templateUrl: 'inserir-grupo.html',
})
export class InserirGrupoPage {
  model: Grupo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController) {
    this.model = new Grupo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InserirGrupoPage');
  }

  inserirGrupo() {
    if (this.authProvider.autenticado()) {
      this.usuarioProvider.grupoCriar(this.model.name).
        subscribe((result: any) => {
          var response = result.json();
          console.log(response);
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

export class Grupo {
  name: string;
}
