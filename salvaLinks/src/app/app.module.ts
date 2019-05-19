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

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CadastroUsuarioPageModule,
    LoginUsuarioPageModule,
    InserirLinkPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    UsuarioProvider,
    AuthProvider
  ]
})
export class AppModule {}
