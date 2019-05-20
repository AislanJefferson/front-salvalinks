import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLinksPage } from './lista-links';

@NgModule({
  declarations: [
    ListaLinksPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaLinksPage),
  ],
})
export class ListaLinksPageModule {}
