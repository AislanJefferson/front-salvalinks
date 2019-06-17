import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginUsuarioPage } from './login-usuario';

@NgModule({
  declarations: [
    LoginUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginUsuarioPage),
  ],
})
export class LoginUsuarioPageModule {}
