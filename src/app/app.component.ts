import { Component, OnInit } from '@angular/core';
import { Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignInPage } from '../pages/signin/signin';
import { DevicesPage } from '../pages/devices/devices';
import { AuthService } from '../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class App implements OnInit {
  private rootPage: any;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen,
              private menuCtrl: MenuController, private events: Events, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.openSignInPage();
    });

    this.events.subscribe('auth:signin', () => this.openDevicesPage());
    this.events.subscribe('auth:signout', () => this.openSignInPage());
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
    this.authService.signOut()
      .then(() => this.events.publish('auth:signout'));
  }

  private openPage(page): void {
    this.rootPage = page;
  }

}

