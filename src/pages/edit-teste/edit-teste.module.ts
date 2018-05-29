import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTestePage } from './edit-teste';

@NgModule({
  declarations: [
    EditTestePage,
  ],
  imports: [
    IonicPageModule.forChild(EditTestePage),
  ],
})
export class EditTestePageModule {}
