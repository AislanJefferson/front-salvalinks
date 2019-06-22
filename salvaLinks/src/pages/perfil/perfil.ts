import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { User } from '../cadastro-usuario/cadastro-usuario';


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
  private grupos: string;
  model: User;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private usuarioProvider: UsuarioProvider) {
    this.model = new User();
  }

  ionViewDidLoad() {
    this.getNome();
    this.numeroLinks();
    this.numeroGrupos();
  }


  numeroLinks() {
    this.usuarioProvider.contadorLinks()
      .subscribe((result: any) => {
      this.links = result._body;
    },
      (error) => {
        console.log(error)
      })
  }

  numeroGrupos() {
    this.usuarioProvider.contadorGrupos()
      .subscribe((result: any) => {
      this.grupos = result._body;
    },
      (error) => {
        console.log(error)
      })
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

  mudarSenha(){
    this.usuarioProvider.mudarSenha(this.model.password, this.model.newpassword).
    subscribe((result) => {
      let toast = this.toastCtrl.create({
        message: "Senha Modificada!",
        duration: 5000
      });
      toast.present();
      this.model.password = this.model.newpassword;
      this.model.newpassword = "";
    },
      (error) => {
        console.log(error);
      });
  }


  renomearUsuario() {
    this.usuarioProvider.renomearUsuario(this.model.name).
      subscribe((result) => {
        let toast = this.toastCtrl.create({
          message: "Usuário Renomeado!",
          duration: 5000
        });
        toast.present();
        this.navCtrl.setRoot(PerfilPage);
      },
        (error) => {
          console.log(error);
        });
  }

 
}


