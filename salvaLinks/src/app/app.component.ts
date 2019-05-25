import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginUsuarioPage } from '../pages/login-usuario/login-usuario';
import { InserirLinkPage } from '../pages/inserir-link/inserir-link';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { PerfilPage } from '../pages/perfil/perfil';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginUsuarioPage;

  pages: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = {
      inserirLink: InserirLinkPage,
      perfil: PerfilPage,
      configuracoes: ConfiguracoesPage,
      sair: LoginUsuarioPage
    } 
  }

  
}

