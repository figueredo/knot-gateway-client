import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GatewaysPage } from '../pages/gateways/gateways';
import { SignInPage } from '../pages/signin/signin';
import { DevicesPage } from '../pages/devices/devices';
import { AuthService } from '../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class App implements OnInit {
  @ViewChild('content') nav: any;
  private rootPage: any;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen,
              private menuCtrl: MenuController, private events: Events, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.openGatewaysPage();
      } else {
        this.openSignInPage();
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.events.subscribe('auth:signin', () => this.openDevicesPage());
    this.events.subscribe('auth:signout', () => this.closeDevicesPage());
  }

  openGatewaysPage(): void {
    this.menuCtrl.close()
      .then(() => {
        this.menuCtrl.enable(false);
        this.rootPage = GatewaysPage;
      });
  }

  openSignInPage(): void {
    this.menuCtrl.close()
      .then(() => {
        this.menuCtrl.enable(false);
        this.rootPage = SignInPage;
      });
  }

  openDevicesPage(): void {
    this.menuCtrl.enable(true);
    this.nav.push(DevicesPage);
  }

  closeDevicesPage(): void {
    this.menuCtrl.close()
      .then(() => {
        this.menuCtrl.enable(false);
        this.nav.pop();
      });
  }

  signOut(): void {
    this.authService.signOut()
      .then(() => this.events.publish('auth:signout'));
  }

}

