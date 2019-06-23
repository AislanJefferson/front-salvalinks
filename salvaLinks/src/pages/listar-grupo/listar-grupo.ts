import { Component } from '@angular/core';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { User } from '../login-usuario/login-usuario';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { ListaGruposPage, Grupo } from '../lista-grupos/lista-grupos';
import { RenomearLinkPage } from '../renomear-link/renomear-link';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioProvider: UsuarioProvider, public toastCtrl: ToastController, public dadosUsuarioProvider: DadosUsuarioProvider) {
    this.model = new User();
    this.link = new Link();
    this.grupo = new Grupo();
  }

  ionViewWillEnter() {
    this.exibirLinksCadastradosEmGrupo();
  }

  exibirLinksCadastradosEmGrupo() {
    this.grupo.name = this.navParams.get('grupoSelecionado');
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

  redirectListaGrupos() {
    this.navCtrl.push(ListaGruposPage);
  }

  deletarLinkEmGrupo(linkId) {
    console.log("Nome do Grupo =>" + this.navParams.get('grupoSelecionado'));
    console.log(linkId);
    this.usuarioProvider.grupoRemoveLink(this.navParams.get('grupoSelecionado'), linkId).subscribe((result: any) => {
      this.exibirLinksCadastradosEmGrupo();
    }, (error) => {
      var resp = error.json()
      let toast = this.toastCtrl.create({
        message: resp.message,
        duration: 3000
      });
      toast.present();
    });
  }

  gerarPDF() {
    let url = this.usuarioProvider.grupoGetPdfUrl(this.navParams.get('grupoSelecionado'));
    window.open(url,'_system', 'location=no');
  }

  redirectRenomearLinkEmGrupo(linkName: string, href: string) {
    this.navCtrl.push(RenomearLinkPage, {
      url: href,
      nomeLink: linkName,
      importance: this.link.importance
    });
  }

  redirectPaginaLink(href: string) {
    console.log(href);
    window.open(href, '_system');
  }

}

export class Link {
  name: string;
  grupo: string;
  href: string;
  importance: string = "alta" || "normal" || "baixa";
}
