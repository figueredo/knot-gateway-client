import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignInPage } from '../signin/signin';
import { DevicesPage } from '../devices/devices';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  private rootPage = DevicesPage;
  private devicesPage = DevicesPage;

  constructor(private navCtrl: NavController, private authService: AuthService) {
  }

  openPage(page): void {
    this.rootPage = page;
  }

  signOut(): void {
    this.authService.signOut()
      .then(() => this.navCtrl.setRoot(SignInPage));
  }

}
