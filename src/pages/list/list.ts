import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { FawryServiceProvider } from '../../providers/fawry-service/fawry-service';
import { Service } from '../../app/service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: any[];
  //Array<{title: string, merchantCode: number, description: string, icon: string, price: number, quantity: number, weight: number, height: number, width: number, length: number}>;
  userId;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fawryService: FawryServiceProvider, public service: Service) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    
    // for(let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     merchantCode: i,
    //     description: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)],
    //     price: i,
    //     quantity: i +2,
    //     weight: i+3,
    //     height: i+4, 
    //     width: i+5,
    //     length: i+6
    //   });
    // }
       this.userId = this.service.getToken();
        this.fawryService.getItems(this.userId).then((data) => {
        //  console.log(data); 
          for(let e in data) {
            if( e == 'data') {
              this.items = data[e];
              break;
            }
          }
        console.log('items',this.items);
        });
  }
  oninit() 
  {
      this.fawryService.createCardToken('is0N+YQzlE4', '7uyA76gf2', '010000000000','asd@asd.com','4005550000000001', '21', '05', '123').then( data => {
            console.log(data);
      }).catch(err => {
				console.log(err);
			});
      
  }//end method
getImage()
{
  this.fawryService.getImage().then( data => {
    console.log('image: ',data);
  }).catch(err => {
    console.log(err);
  });
}
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  createItem()
  {
    this.navCtrl.push("AddItemPage");
  }
}
