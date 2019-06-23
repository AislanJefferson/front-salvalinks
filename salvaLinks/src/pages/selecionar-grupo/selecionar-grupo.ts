import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { ToastController } from 'ionic-angular';
import { User } from '../login-usuario/login-usuario';

/**
 * Generated class for the ListaGruposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecionar-grupo',
  templateUrl: 'selecionar-grupo.html',
})
export class SelecionarGrupoPage {
  public listaGrupos = new Array<any>();
  model: User;
  grupo: Grupo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, public toastCtrl: ToastController) {
    this.model = new User();
    this.grupo = new Grupo();
  }

  ionViewWillEnter() {
    this.exibirGruposCadastrados();
  }

  exibirGruposCadastrados() {
    this.usuarioProvider.grupoGetAllNames().subscribe((result: any) => {
      this.listaGrupos = result.json();
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

  adicionarLinkAGrupo(grupoName: string) {
    console.log("Nome do Grupo => " + grupoName + "ID do Link => " + this.navParams.get('linkID'));
    this.usuarioProvider.grupoAddLink(grupoName, this.navParams.get('linkID')).subscribe((result: any) => {
      this.exibirGruposCadastrados();
    }, (error) => {
      var resp = error.json()
      let toast = this.toastCtrl.create({
        message: resp.message,
        duration: 3000
      });
      toast.present();
    });
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaGruposPage');
  }

}

export class Grupo {
  name: string;
}