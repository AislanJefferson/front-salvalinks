import { Component } from '@angular/core';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';
import { User } from '../login-usuario/login-usuario';
import { InserirLinkPage, Link } from '../inserir-link/inserir-link';
import { RenomearLinkPage } from '../renomear-link/renomear-link';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { SelecionarGrupoPage } from '../selecionar-grupo/selecionar-grupo';

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
  private listaLinks = new Array<any>();
  model: User;
  link: Link;
  email: string;
  private mudarGrupo: boolean = false;
  private linkAEditar: string = "";
  private orderByFirstIn: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, private authProvider: AuthProvider, public toastCtrl: ToastController, public dadosUsuarioProvider: DadosUsuarioProvider) {
    this.model = new User();
    this.link = new Link();
  }

  exibirLinksPorData() {
    this.usuarioProvider.LinksPorData().subscribe((result: any) => {
      this.listaLinks = result.json();

    }, (error) => {
      var resp = error.json()
      let toast = this.toastCtrl.create({
        message: resp.message,
        duration: 3000
      });
      toast.present();
    });
  }

  exibirLinksCadastrados() {
    this.usuarioProvider.exibirLinksCadastrados(this.authProvider.getEmail()).subscribe((result: any) => {
      this.listaLinks = result.json();

    }, (error) => {
      var resp = error.json()
      let toast = this.toastCtrl.create({
        message: resp.message,
        duration: 3000
      });
      toast.present();
    });
  }
  redirectInserirLink() {
    this.navCtrl.push(InserirLinkPage);
  }

  redirectRenomearLink(linkName: string, href: string) {
    this.link.name = linkName;
    console.log("=> " + this.link);
    this.navCtrl.push(RenomearLinkPage, {
      url: href,
      nomeLink: linkName,
      importance: this.link.importance
    });
  }

  deletarLink(tituloLink) {
    this.usuarioProvider.deletarLink(this.authProvider.getEmail(), tituloLink).subscribe((result: any) => {
      var respOK = result.json();
      this.listar();
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

  alternarParaEdicao(idLink: string) {
    this.mudarGrupo = !this.mudarGrupo;
    if (this.mudarGrupo) this.linkAEditar = idLink
    else this.linkAEditar = "";
  }

  selecionarGrupo(linkName: string, linkID: string) {
    this.link.name = linkName;
    console.log("ID do Link => " + linkID);
    this.navCtrl.push(SelecionarGrupoPage, {
      linkID: linkID,
      nomeLink: linkName
    });
  }

  redirectPaginaLink(href: string) {
    console.log(href);
    window.open(href, '_system');
  }

  alternaOrdenacao() {
    this.orderByFirstIn = !this.orderByFirstIn;
    this.listar();
  }

  listar() {
    if (this.orderByFirstIn) {
      this.exibirLinksCadastrados();
    } else {
      this.exibirLinksPorData();
    }
  }

  ionViewDidEnter() {
    this.orderByFirstIn = true;
    this.listar();
  }

}