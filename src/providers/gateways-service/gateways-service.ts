import { Injectable, NgZone } from '@angular/core';
import { Zeroconf, ZeroconfService } from '@ionic-native/zeroconf';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Gateway extends ZeroconfService {
}

class GatewayDict {

  private _gateways: { [index: string]: Gateway };

  constructor() {
    this._gateways = {};
  }

  get values(): Gateway[] {
    return Object
      .keys(this._gateways)
      .map(key => this._gateways[key]);
  }

  add(gateway: Gateway): void {
    this._gateways[gateway.name] = gateway;
  }

  remove(gateway: Gateway): void {
    delete this._gateways[gateway.name];
  }

}

@Injectable()
export class GatewaysService {

  private gatewayDict: GatewayDict;
  private _gateways: BehaviorSubject<Gateway[]>;

  constructor(private zeroconf: Zeroconf, private ngZone: NgZone) {
    this.gatewayDict = new GatewayDict();
    this._gateways = new BehaviorSubject<Gateway[]>([]);
  }

  get gateways(): Observable<Gateway[]> {
    return this._gateways.asObservable();
  }

  start(): void {
    this.zeroconf.watch('_knot._tcp.', 'local.')
      .subscribe(result => this.ngZone.run(() => {
        if (result.action === 'added') {
          this.onAdded(result.service);
        } else if (result.action === 'removed') {
          this.onRemoved(result.service);
        }
      }));
  }

  stop(): void {
    this.zeroconf.close();
  }

  private onAdded(gateway: Gateway): void {
    this.gatewayDict.add(gateway);
    this.publish(this.gatewayDict.values);
  }

  private onRemoved(gateway: Gateway): void {
    this.gatewayDict.remove(gateway);
    this.publish(this.gatewayDict.values);
  }

  private publish(gateways: Gateway[]): void {
    this._gateways.next(gateways);
  }

}
