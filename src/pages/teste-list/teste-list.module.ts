import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesteListPage } from './teste-list';

@NgModule({
  declarations: [
    TesteListPage,
  ],
  imports: [
    IonicPageModule.forChild(TesteListPage),
  ],
})
export class TesteListPageModule {}
