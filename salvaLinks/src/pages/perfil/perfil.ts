import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  model: User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
     this.model = new User();
     this.model.email = this.auth.getEmail()
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}

export class User {
  name: string;
  email: string;
  password: string;
}
