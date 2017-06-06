import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

import { MainPage } from '../main/main';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SignInPage {
  private loading: Loading;
  private signInForm: FormGroup;

  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private formBuilder: FormBuilder, private auth: AuthService) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signIn(credentials) {
    this.showLoading();
    this.auth.signIn(credentials)
      .then(() => this.onSignInSuccess(),
            () => this.onSignInFailure());
  }

  private onSignInSuccess(): void {
    this.navCtrl.setRoot(MainPage);
  }

  private onSignInFailure(): void {
    this.loading.dismiss();
    this.showError();
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Signing in...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  private showError(): void {
    const alert = this.alertCtrl.create({
      message: 'Invalid credentials. Try again.',
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
