import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 password: string;namePerson: string;
 Radios : array <any>=[];
 Fms : array <any>=[];
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }


  Radios = [
  "PhiChai Radio","Thasao Radio"
  ]

  Fms = [
  "FM 97 Mhz","FM 102 Mhz"
  ]

namePerson = "555";
  showAlert(name: string){
    let alert = this.alertCtrl.create({
      title: 'New Friend  !',
      subTitle: 'Hello ! '+ name,
      buttons: ['OK']
    });
    alert.present();
  }
}
