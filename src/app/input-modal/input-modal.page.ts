import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.page.html',
  styleUrls: ['./input-modal.page.scss'],
})
export class InputModalPage implements OnInit {

  user: any;
  userID: any;

  constructor(private modalController: ModalController, private navParams: NavParams,
    public http: HttpClient,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  this.clear();
  this.userID = this.navParams.data.userID;
   if (this.userID) {
    this.editUser(this.userID);
   }
  }
  closeModal() {
    this.modalController.dismiss();
  }

  clear() {
    this.user = {
      name: "",
      phone: "",
      email: "",
      stream: "",
      gender: "",
      about: "",
      experience: "",
    };
  }

  save() {
    this.http.post('https://click-on-kaduna.herokuapp.com/api/student',
    this.user).subscribe((response) => {
      const res: any = response;
      this.closeModal();
      this.presentAlert(res.message);
    });
  }

  editUser(id) {
    this.http.get('https://click-on-kaduna.herokuapp.com/api/student/' + id)
    .subscribe((response) => {
      const res:any = response;
      this.user = {
        name: res.data.name,
        phone: res.data.phone,
        email: res.data.email,
        stream: res.data.stream,
        gender: res.data.gender,
        about: res.data.about,
        experience: res.data.experience,
      };
    });
  }
  update() {
    this.http.patch('https://click-on-kaduna.herokuapp.com/api/student/' + 
    this.userID, this.user).subscribe((response) => {
      const res: any = response;
    this.closeModal();
    this.presentAlert(res.message);
    });
    
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
}
