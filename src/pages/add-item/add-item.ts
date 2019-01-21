import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FawryServiceProvider } from '../../providers/fawry-service/fawry-service';
import { Service } from '../../app/service';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  description: any;
  price: number=0;
  height: any;
  width: any;
  length: any;
  weight: any;
  userId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fawryService: FawryServiceProvider, public service: Service, public toastCtrl: ToastController, public alertCtrl: AlertController) {
      this.userId = this.service.getId();
      console.log('id: ', this.userId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }


  presentAlert() {
		let alert = this.alertCtrl.create({
			title: 'Missing entry fields',
			subTitle: 'Sorry, You must fill in the required enteries to create an item!',
			buttons: ['Dismiss']
		});
		alert.present();
	}

  createItem()
  {
    if( this.description == "" || this.price == 0 
        || this.height == "" || this.length =="" 
        || this.weight == "" || this.width=="" )
        {
            this.presentAlert();
        }
        else {
      let token = this.service.getToken();
      let item = {'merchantCode':this.userId,'description': this.description, 'price': this.price, 'height': this.height, 'width': this.width, 'length': this.length, 'weight': this.weight};
      this.fawryService.createItem(token ,item).then((data) => {
        console.log(data);
        const toast = this.toastCtrl.create({
          message: 'Item created successully!',
          duration: 3000
          });
          toast.present();
        
      }).catch((err) => {
        console.log(err);
      });
  }
}
}
