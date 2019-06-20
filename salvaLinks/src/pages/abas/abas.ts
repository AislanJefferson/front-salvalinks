import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaLinksPage } from '../lista-links/lista-links';
import { InserirLinkPage } from '../inserir-link/inserir-link';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the AbasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abas',
  templateUrl: 'abas.html',
})
export class AbasPage {

  tab1Root = ListaLinksPage;
  tab2Root = InserirLinkPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,private authProvider : AuthProvider) {
  }
  
  ionViewCanEnter(): boolean {
    if (this.authProvider.autenticado()) {
      return true;
    } else {
      return false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbasPage');
  }

}
