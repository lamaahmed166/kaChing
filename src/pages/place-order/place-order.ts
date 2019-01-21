import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';
import { FawryServiceProvider } from '../../providers/fawry-service/fawry-service';

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


  orders: any[];
  merchantCode: any;
  customerId: any;
  orderDesc: any;
  orderExpiry: any;
  orderAmount: any;
  cart: any []
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service, public fawryService: FawryServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceOrderPage');
  }




  createOrder() {
    let token = this.service.getToken();
    this.customerId = this.service.getId();
    this.merchantCode = this.cart[0]['merchantCode'];
    let order = {'merchantCode': this.merchantCode, 'customerId': this.customerId, 'orderDesc':this.orderDesc, 'orderExpiry': this.orderExpiry, 'orderAmount': this.orderAmount, 'items': this.cart}; 
    this.fawryService.createOrder(token, order).then((data) => {
      console.log('order data: ', data);
    });
    //emptying the cart after placing an order
    this.cart.length = 0;
    this.service.setCart(this.cart);
  
  }

}
