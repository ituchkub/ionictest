import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 password: string;namePerson: string;
 Radios:Array<Object>;
 Fms:Array<Object>;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

    this.Radios = [
      "PhiChai Radio","Thasao Radio"
      ]    
      this.Fms = [
      "FM 97 Mhz","FM 102 Mhz"
      ]
  }




  showAlert(name: string){
    let alert = this.alertCtrl.create({
      title: 'New Friend  !',
      subTitle: 'Hello ! '+ name,
      buttons: ['OK']
    });
    alert.present();
  }
}
