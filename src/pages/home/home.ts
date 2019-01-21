import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {

   // this.menu.enable(true, 'myMenu');
    //this.menu.swipeEnable(true, 'myMenu');
   // this.menu.open('myMenu');
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(true, 'myMenu');
    console.log('ionViewDidLoad HomePage');
  }

}
