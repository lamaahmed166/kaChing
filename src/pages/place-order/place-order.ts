import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';

/**
 * Generated class for the PlaceOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-order',
  templateUrl: 'place-order.html',
})
export class PlaceOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceOrderPage');
  }


  addToOrders()
  {
    let len = this.service.getCart.length;


    for( let i=0; i<len; i++)
         this.service.addOrder(this.service.getCart().indexOf[i]);
  }

}
