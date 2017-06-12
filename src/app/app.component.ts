import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GatewaysPage } from '../pages/gateways/gateways';
import { SignInPage } from '../pages/signin/signin';

@Component({
  templateUrl: 'app.html'
})
export class App {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      if (platform.is('cordova')) {
        this.rootPage = GatewaysPage;
      } else {
        this.rootPage = SignInPage;
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

