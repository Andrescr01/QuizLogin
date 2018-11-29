import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarePage } from './registrare';

@NgModule({
  declarations: [
    RegistrarePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrarePage),
  ],
})
export class RegistrarePageModule {}
