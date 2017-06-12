import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GatewaysPage } from './gateways';

@NgModule({
  declarations: [
    GatewaysPage,
  ],
  imports: [
    IonicPageModule.forChild(GatewaysPage),
  ],
  exports: [
    GatewaysPage
  ]
})
export class GatewaysPageModule {}
