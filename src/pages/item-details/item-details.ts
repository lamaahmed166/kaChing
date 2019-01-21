import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  userId: any;
  cart: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }


  addToCart()
  {
    this.userId = this.service.getId();
    this.cart = this.service.getCart();
    this.cart.push(this.selectedItem);
    this.service.setCart(this.cart);
  }
}
