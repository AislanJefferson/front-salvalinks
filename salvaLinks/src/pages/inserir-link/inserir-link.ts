import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginUsuarioPage } from '../login-usuario/login-usuario';
import { ListaLinksPage } from '../lista-links/lista-links';

/**
 * Generated class for the InserirLinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserir-link',
  templateUrl: 'inserir-link.html',
})
export class InserirLinkPage {
  model: Link;


  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController) {
    this.model = new Link();
    this.model.importance = "normal";

  }

  ionViewCanEnter(): boolean {
    if (this.authProvider.autenticado()) {
      return true;
    } else {
      return false;
    }
  }

  ionViewWillEnter() {
    if (this.usuarioProvider.temLinkAInserir()) {
      let link = this.usuarioProvider.getlinkExterno();
      this.model.name = link.titulo;
      this.model.href = link.link;
    }

  }

  inserirLink() {
    if (this.authProvider.autenticado()) {
      this.usuarioProvider.insereLink(this.authProvider.getEmail(), this.model.name, this.model.href, this.model.importance).
        subscribe((result: any) => {
          var response = result.json();
          console.log(response);
          this.navCtrl.setRoot(ListaLinksPage);

        },
          (error) => {
            console.log(error)
          });
    } else {
      this.navCtrl.setRoot(LoginUsuarioPage);
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InserirLinkPage');
  }

  //openNav() {
  //  document.getElementById("mySidenav").style.width = "250px";
  //}

  //closeNav() {
  //  document.getElementById("mySidenav").style.width = "0";
  //}
}

export class Link {
  name: string;
  href: string;
  importance: string = "alta" || "normal" || "baixa";
}
