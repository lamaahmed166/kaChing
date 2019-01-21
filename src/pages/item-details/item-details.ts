import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Service } from '../../app/service';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Service) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }


  addToCart()
  {
    this.service.addToCart(this.selectedItem);
  }
}
