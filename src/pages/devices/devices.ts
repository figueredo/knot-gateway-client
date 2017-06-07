import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DevicesService } from '../../providers/devices-service/devices-service';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {

  allowedDevices: Observable<any[]>;
  notAllowedDevices: Observable<any[]>;
  hasAllowedDevices: Observable<boolean>;

  constructor(private devicesService: DevicesService, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.allowedDevices = this.devicesService.allowedDevices;
    this.notAllowedDevices = this.devicesService.notAllowedDevices;
    this.hasAllowedDevices = this.allowedDevices
      .map(devices => devices.length > 0);
  }

  allow(device) {
    this.devicesService.setDeviceAllowed(device, true);
  }

  disallow(device) {
    this.confirmDisallow(device)
      .then((confirmed) => {
        if (confirmed) {
          this.devicesService.setDeviceAllowed(device, false);
        }
      });
  }

  confirmDisallow(device) {
    return new Promise<boolean>((resolve, reject) => {
      const confirm = this.alertCtrl.create({
        message: 'Do you wan\'t to forget ' + device.name + '?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => resolve(false)
          },
          {
            text: 'OK',
            handler: () => resolve(true)
          }
        ]
      });
      confirm.present();
    });
  }

}
