import { Component } from '@angular/core';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';
import { User } from '../login-usuario/login-usuario';
import { InserirLinkGrupoPage} from '../inserir-link-grupo/inserir-link-grupo';
import { RenomearLinkGrupoPage } from '../renomear-link-grupo/renomear-link-grupo';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { ListaGruposPage, Grupo } from '../lista-grupos/lista-grupos';
import { ThrowStmt } from '@angular/compiler';

/**
 * Generated class for the ListarGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-grupo',
  templateUrl: 'listar-grupo.html',
})
export class ListarGrupoPage {
  public listaLinksDeGrupo = new Array<any>();
  model: User;
  link: Link;
  grupo: Grupo;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController, public dadosUsuarioProvider: DadosUsuarioProvider) {
    this.model = new User();
    this.link = new Link();
    this.grupo = new Grupo();
  }

  ionViewWillEnter() {
    this.exibirLinksCadastradosEmGrupo();
  }

  exibirLinksCadastradosEmGrupo() {
    console.log("Nome do Grupo =>" + this.navParams.get('grupoSelecionado'));
    this.usuarioProvider.grupoGetLinks(this.navParams.get('grupoSelecionado')).subscribe((result: any) => {
      this.listaLinksDeGrupo = result.json();
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

  redirectInserirLinkEmGrupo() {
    console.log("Nome do Grupo => " + this.navParams.get('grupoSelecionado'));
    this.navCtrl.push(InserirLinkGrupoPage, {
      nomeGrupo: this.navParams.get('grupoSelecionado')
    });
  }

  redirectRenomearLinkEmGrupo(linkName: string, grupoName: string) {
    this.link.name = linkName;
    console.log("Nome do Link => " + linkName);
    console.log("Nome do Grupo => " + this.navParams.get('grupoSelecionado'));
    this.navCtrl.push(RenomearLinkGrupoPage, {
      nomeLink: linkName,
      nomeGrupo: this.navParams.get('grupoSelecionado')
    });
  }

  deletarLinkEmGrupo(tituloLink) {
    console.log("Nome do Grupo =>" + this.navParams.get('grupoSelecionado'));
    console.log(tituloLink);

    this.usuarioProvider.grupoRemoveLink(this.navParams.get('grupoSelecionado'), tituloLink).subscribe((result: any) => {
      var respOK = result.json();
      this.exibirLinksCadastradosEmGrupo();
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

export class Link {
  name: string;
  grupo: string;
  href: string;
  importance: string = "alta" || "normal" || "baixa";
}
