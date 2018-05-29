import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTestePage } from './add-teste';

@NgModule({
  declarations: [
    AddTestePage,
  ],
  imports: [
    IonicPageModule.forChild(AddTestePage),
  ],
})
export class AddTestePageModule {}
