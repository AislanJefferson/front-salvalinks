import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarGrupoPage } from './listar-grupo';

@NgModule({
  declarations: [
    ListarGrupoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarGrupoPage),
  ],
})
export class ListarGrupoPageModule {}
