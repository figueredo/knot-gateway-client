import { Component, OnInit } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignInPage } from '../pages/signin/signin';
import { DevicesPage } from '../pages/devices/devices';

@Component({
  templateUrl: 'app.html'
})
export class App implements OnInit {
  private rootPage: any;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
  }

  ngOnInit(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.openSignInPage();
    });
  }

  openSignInPage(): void {
    this.menuCtrl.enable(false);
    this.openPage(SignInPage);
  }

  openDevicesPage(): void {
    this.menuCtrl.enable(true);
    this.openPage(DevicesPage);
  }

  signOut(): void {
    this.openSignInPage();
  }

  private openPage(page): void {
    this.rootPage = page;
  }

}

