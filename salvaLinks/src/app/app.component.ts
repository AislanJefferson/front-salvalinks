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
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';

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
  private senderId = '457258455793';
  private oneSignalAppId = '31636f90-5d25-4d00-8e4b-b02e566f8a44';
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public usuarioProvider: UsuarioProvider, public dadosUsuarioProvider: DadosUsuarioProvider, private oneSignal: OneSignal) {
    let obj = this;
    platform.ready().then(() => {
      let dados = dadosUsuarioProvider.getDados();
      console.log(dados);
      if (platform.is('android')) {
        this.oneSignal.startInit(this.oneSignalAppId, this.senderId);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        this.oneSignal.endInit();
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
        (<any>window).plugins.intentShim.onIntent(
          function (intent) {
            //you should filter on the intents you actually want to receive based on Intent.action
            console.log('intent received on app launch' + JSON.stringify(intent));
            var intentExtras = intent.extras;
            if (intentExtras != null) {
              obj.usuarioProvider.addLinkExterno(intentExtras["android.intent.extra.SUBJECT"], intentExtras["android.intent.extra.TEXT"]);
              obj.nav.setRoot(InserirLinkPage);
            }

          }
        );
      }
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        if (this.nav.canGoBack()) { //Can we go back?
          this.nav.pop();
        } else {
          platform.exitApp(); //Exit from app
        }
      });
    });

    this.pages = {
      inserirLink: InserirLinkPage,
      perfil: PerfilPage,
      configuracoes: ConfiguracoesPage,
      sair: LoginUsuarioPage,
      lista: ListaLinksPage
    }
  }

  private onPushReceived(payload: OSNotificationPayload) {
    console.log(payload.body);
  }

  private onPushOpened(payload: OSNotificationPayload) {
    window.open(payload.body, '_system');
  }


}

