import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaGruposPage } from './lista-grupos';

@NgModule({
  declarations: [
    ListaGruposPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaGruposPage),
  ],
})
export class ListaGruposPageModule {}
