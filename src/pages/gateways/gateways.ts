import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { SignInPage } from '../signin/signin';
import { GatewaysService, Gateway } from '../../providers/gateways-service/gateways-service';

@Component({
  selector: 'page-gateways',
  templateUrl: 'gateways.html',
})
export class GatewaysPage {

  gateways: Observable<Gateway[]>;
  hasGateways: Observable<boolean>;

  constructor(private navCtrl: NavController, private gatewaysService: GatewaysService) {
    this.gateways = this.gatewaysService.gateways;
    this.hasGateways = this.gateways
      .map(gateways => gateways.length > 0);
  }

  connect(gateway: Gateway): void {
    this.navCtrl.setRoot(SignInPage);
  }

  ngOnInit() {
    this.gatewaysService.start();
  }

  ngOnDestroy() {
    this.gatewaysService.stop();
  }

}
