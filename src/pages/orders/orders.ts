import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  orders: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service) {
  
    this.getOrders();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }




  getOrders() {
   this.orders= this.service.getOrders();
  }
}
