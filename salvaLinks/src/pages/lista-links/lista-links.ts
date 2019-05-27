import { Component } from '@angular/core';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';
import { User } from '../login-usuario/login-usuario';
import { InserirLinkPage, Link } from '../inserir-link/inserir-link';
import { RenomearLinkPage } from '../renomear-link/renomear-link';
/**
 * Generated class for the ListaLinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-links',
  templateUrl: 'lista-links.html',
})
export class ListaLinksPage {
  public listaLinks = new Array<any>();
  model: User;
  link: Link;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController) {
    this.model = new User();
    this.link = new Link();
  }

  ionViewWillEnter(){
    this.exibirLinksCadastrados();
  }

  exibirLinksCadastrados() {
    this.usuarioProvider.exibirLinksCadastrados(this.authProvider.getEmail()).subscribe((result: any) => {
      var respOK = result.json();
      this.listaLinks = result.json();
      console.log(respOK);
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
  redirectInserirLink(){
    this.navCtrl.setRoot(InserirLinkPage);
  }

  redirectRenomearLink(tituloLink) {
    this.link.name = tituloLink;
    console.log(this.link.name);
    this.navCtrl.push(RenomearLinkPage, {
      nomeLink: tituloLink
    });
  }

  deletarLink(tituloLink){
    console.log(tituloLink);
    
    this.usuarioProvider.deletarLink(this.authProvider.getEmail(), tituloLink).subscribe((result: any) => {
      var respOK = result.json();
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