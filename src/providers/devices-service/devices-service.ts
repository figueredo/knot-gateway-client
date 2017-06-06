import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()
export class DevicesService {

  private devices: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.devices = db.list('/devices');
  }

  get allowedDevices(): Observable<any[]> {
    return this.devices
      .map(devices => devices
        .filter(device => device.allowed));
  }

  get notAllowedDevices(): Observable<any[]> {
    return this.devices
      .map(devices => devices.
        filter(device => !device.allowed));
  }

}
