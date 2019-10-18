import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {Location} from '@angular/common';
import {ToastService} from '../../../core/services/toast/toast.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    private form: FormGroup;

    private isValid = true;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router,
                private loaderController: LoadingController,
                private location: Location,
                private toastService: ToastService) {

        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
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

            this.toastService.info('Bonjour !');

        } catch (e) {

            await loader.dismiss();
            this.isValid = false;

            this.toastService.error('Les identifiants indiqués sont erronés !');
        }
    }
}
