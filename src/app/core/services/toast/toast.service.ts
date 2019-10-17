import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private toastController: ToastController) {
    }

    async toast(msg: string, color: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'top',
            color
        });
        await toast.present();
    }

    async info(msg: string) {
        this.toast(msg, 'primary');
    }

    async warning(msg: string) {
        this.toast(msg, 'warning');
    }

    async error(msg: string) {
        this.toast(msg, 'danger');
    }
}
