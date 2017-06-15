import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GatewaysService, Gateway } from '../../providers/gateways-service/gateways-service';

@Component({
  selector: 'page-gateways',
  templateUrl: 'gateways.html',
})
export class GatewaysPage {

  gateways: Observable<Gateway[]>;
  hasGateways: Observable<boolean>;

  constructor(private gatewaysService: GatewaysService) {
    this.gateways = this.gatewaysService.gateways;
    this.hasGateways = this.gateways
      .map(gateways => gateways.length > 0);
  }

  ngOnInit() {
    this.gatewaysService.start();
  }

  ngOnDestroy() {
    this.gatewaysService.stop();
  }

}
