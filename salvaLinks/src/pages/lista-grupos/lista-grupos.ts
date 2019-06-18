import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaLinksPage } from '../lista-links/lista-links';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';
import { User } from '../login-usuario/login-usuario';
import {InserirGrupoPage} from '../inserir-grupo/inserir-grupo';
//import { RenomearGrupoPage } from '../renomear-grupo/renomear-grupo';

/**
 * Generated class for the ListaGruposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-grupos',
  templateUrl: 'lista-grupos.html',
})
export class ListaGruposPage {
  public listaGrupos = new Array<any>();
  model: User;
  //grupo: Grupo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController) {
    this.model = new User();
    //this.grupo = new Grupo();
  }

  ionViewWillEnter() {
    this.exibirGruposCadastrados();  
  }

  exibirGruposCadastrados() {
    this.usuarioProvider.exibirGruposCadastrados(this.authProvider.getEmail()).subscribe((result: any) => {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaGruposPage');
  }

  redirectListaLinks() {
    this.navCtrl.push(ListaLinksPage);
  }

  redirectInserirGrupo() {
    this.navCtrl.push(InserirGrupoPage);
  }

  /*redirectRenomearGrupo(){
    this.navCtrl.push(RenomearGrupoPage);
  }*/

  deletarGrupo(tituloGrupo){
    console.log(tituloGrupo);
    this.usuarioProvider.deletarGrupo(this.authProvider.getEmail(), tituloGrupo).subscribe((result: any) => {
      var respOK = result.json();
      this.exibirGruposCadastrados();
      console.log(respOK);
    }, (error) => {
      var resp = error.json()
      let toast = this.toastCtrl.create({
        message: resp.message,
        duration: 3000
      });
      toast.present();
    });
  }

}