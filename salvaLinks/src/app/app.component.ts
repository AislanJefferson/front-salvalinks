import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginUsuarioPage } from '../pages/login-usuario/login-usuario';
import { InserirLinkPage } from '../pages/inserir-link/inserir-link';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { PerfilPage } from '../pages/perfil/perfil';
import { ListaLinksPage } from '../pages/lista-links/lista-links';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { DadosUsuarioProvider } from '../providers/dados-usuario/dados-usuario';
@Component({
  templateUrl: 'app.html',
  providers: [
    DadosUsuarioProvider
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginUsuarioPage;

  pages: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public usuarioProvider: UsuarioProvider, public dadosUsuarioProvider: DadosUsuarioProvider) {
    let obj = this;
    platform.ready().then(() => {
      let dados = dadosUsuarioProvider.getDados();
      console.log(dados);
      if (platform.is('android')) {
        (<any>window).plugins.intentShim.getIntent(
          function (intent) {
            //you should filter on the intents you actually want to receive based on Intent.action
            console.log('intent received on app launch' + JSON.stringify(intent));
            var intentExtras = intent.extras;
            if (intentExtras != null) obj.usuarioProvider.addLinkExterno(intentExtras["android.intent.extra.SUBJECT"], intentExtras["android.intent.extra.TEXT"]);
          },
          function () {
            console.log('Error getting cordova intent');
          }
        );
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = {
      inserirLink: InserirLinkPage,
      perfil: PerfilPage,
      configuracoes: ConfiguracoesPage,
      sair: LoginUsuarioPage,
      lista: ListaLinksPage
    }
  }




}

