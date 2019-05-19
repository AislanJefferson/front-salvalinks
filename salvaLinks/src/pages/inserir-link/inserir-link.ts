import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AuthProvider } from '../../providers/auth/auth';

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
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController) {
    this.model = new User();
  }

  inserirLink() {
    if (this.authProvider.autenticado) {
      this.usuarioProvider.insereLink(this.model.name,this.model.href,this.model.importance,this.model.type).
        subscribe((result: any) => {
          console.log(result)
          result.json();
        },
          (error) => {
            console.log(error)
            error.json();
          });
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InserirLinkPage');
  }
}

export class User {
  name: string;
  href: string;
  importance: string;
  type: string;
}
