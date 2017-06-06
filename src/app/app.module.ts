import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { App } from './app.component';

import { SignInPageModule } from '../pages/signin/signin.module';
import { DevicesPageModule } from '../pages/devices/devices.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    SignInPageModule,
    DevicesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
