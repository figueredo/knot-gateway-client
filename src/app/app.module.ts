import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { App } from './app.component';
import { SignInPage } from '../pages/signin/signin';
import { MainPage } from '../pages/main/main';
import { DevicesPage } from '../pages/devices/devices';
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
    App,
    SignInPage,
    MainPage,
    DevicesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    SignInPage,
    MainPage,
    DevicesPage
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
