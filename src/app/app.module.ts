import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { App } from './app.component';

import { SignInPageModule } from '../pages/signin/signin.module';
import { DevicesPageModule } from '../pages/devices/devices.module';
import { AuthService } from '../providers/auth-service/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyC7y1GwD18kgl6KSNWwTlNnM2sMnVLPqbg",
  authDomain: "knot-258c9.firebaseapp.com",
  databaseURL: "https://knot-258c9.firebaseio.com",
  projectId: "knot-258c9",
  storageBucket: "knot-258c9.appspot.com",
  messagingSenderId: "373290372028"
};

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
    DevicesPageModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthService
  ]
})
export class AppModule {}
