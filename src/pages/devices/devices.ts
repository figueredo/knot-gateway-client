import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DevicesService } from '../../providers/devices-service/devices-service';

@IonicPage()
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage implements OnInit {

  allowedDevices: Observable<any[]>;
  notAllowedDevices: Observable<any[]>;
  hasAllowedDevices: Observable<boolean>;

  constructor(private devicesService: DevicesService) {
  }

  ngOnInit() {
    this.allowedDevices = this.devicesService.allowedDevices;
    this.notAllowedDevices = this.devicesService.notAllowedDevices;
    this.hasAllowedDevices = this.allowedDevices
      .map(devices => devices.length > 0);
  }

}
