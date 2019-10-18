import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  private form: FormGroup;

  private isValid = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private loaderController: LoadingController, private location: Location) {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {

    console.log('I\'m enter');
  }

  async loginForm() {

    this.isValid = true;

    if (this.form.invalid) {

      return;
    }

    const loader = await this.loaderController.create({message: 'Loading...'});

    await loader.present();

    try {

      const authResponse = await this.authService.login({
        email: this.form.get('email').value,
        password: this.form.get('password').value
      } as User);

      await loader.dismiss();
      this.location.back();

      // TODO toast you ave been login

    } catch (e) {

      await loader.dismiss();
      this.isValid = false;

      // TODO toast login failed
    }
  }
}
