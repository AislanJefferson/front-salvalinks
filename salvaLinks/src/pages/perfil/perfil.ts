import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

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

  private nome: string;
  private links: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider) {
  }

  ionViewDidLoad() {
    this.getNome();
  }


  numeroLinks(){
    return this.links = this.usuarioProvider.contadorLinks().toString();
    //this.usuarioProvider.contadorLinks().toString().subscribe((result: any) => {
    //   this.links = result._body;
    //  },
    //    (error) => {
    //      console.log(error)
    //    })
    }
    

  


  getNome() {
    this.usuarioProvider.getNomeUsuario()
      .subscribe((result: any) => {
        this.nome = result._body;
      },
        (error) => {
          console.log(error)
        })
  }
}