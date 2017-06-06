import { Component } from '@angular/core';

import { DevicesPage } from '../devices/devices';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  private rootPage = DevicesPage;
  private devicesPage = DevicesPage;

  constructor() {
  }

  openPage(page): void {
    this.rootPage = page;
  }

  signOut(): void {
  }

}
