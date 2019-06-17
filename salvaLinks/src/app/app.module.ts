import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroUsuarioPageModule } from '../pages/cadastro-usuario/cadastro-usuario.module';
import { UsuarioProvider } from '../providers/usuario/usuario';

import { HttpModule } from '@angular/http';
import { LoginUsuarioPageModule } from '../pages/login-usuario/login-usuario.module';
import { AuthProvider } from '../providers/auth/auth';
import { InserirLinkPageModule } from '../pages/inserir-link/inserir-link.module';
import { ListaLinksPageModule } from '../pages/lista-links/lista-links.module';
import { RenomearLinkPageModule } from '../pages/renomear-link/renomear-link.module';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { DadosUsuarioProvider } from '../providers/dados-usuario/dados-usuario';
import { RedefinirSenhaPageModule } from '../pages/redefinir-senha/redefinir-senha.module';

import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { LoginUsuarioPage } from '../pages/login-usuario/login-usuario';
import { InserirLinkPage } from '../pages/inserir-link/inserir-link';
import { ListaLinksPage } from '../pages/lista-links/lista-links';
import { PerfilPage } from '../pages/perfil/perfil';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { RedefinirSenhaPage } from '../pages/redefinir-senha/redefinir-senha';
import { RenomearLinkPage } from '../pages/renomear-link/renomear-link';
import { OneSignal } from '@ionic-native/onesignal';
import { OnesignalProvider } from '../providers/onesignal/onesignal';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {
      // 
      }, {
        links: [
          // DeepLinker
        {component: LoginUsuarioPage, name: 'LoginUsuario', segment: 'login'},
        {component: CadastroUsuarioPage, name: 'CadastroUsuario', segment: 'users/register'},
        {component: ListaLinksPage, name: 'ListaLinks', segment: 'links'},
        {component: InserirLinkPage, name: 'InserirLink', segment: 'links/add'},
        {component: PerfilPage, name: 'Perfil', segment: 'perfil'},
        {component: ConfiguracoesPage, name: 'Configuracoes', segment: 'config'},
        {component: RedefinirSenhaPage, name: 'RedefinirSenha', segment: 'redefine'},
        {component: RenomearLinkPage, name: 'RenomearLink', segment: 'links/rename'}
        ]
      }
      ),
    CadastroUsuarioPageModule,
    LoginUsuarioPageModule,
    InserirLinkPageModule,
    ListaLinksPageModule,
    RenomearLinkPageModule,
    HttpModule,
    ConfiguracoesPageModule,
    PerfilPageModule,
    RedefinirSenhaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsuarioProvider,
    AuthProvider,
    DadosUsuarioProvider,
    Deeplinks,
    OneSignal,
    OnesignalProvider
  ]
})
export class AppModule { }
