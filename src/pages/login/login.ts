import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, ModalController, AlertController } from 'ionic-angular';
import {Http} from '@angular/http';
import { FawryServiceProvider } from '../../providers/fawry-service/fawry-service';
import { Service } from '../../app/service';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username : any;
  password: any;
  params: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public menuController: MenuController, public service: Service, public toastCtrl: ToastController, public modalCtrl: ModalController, public fawryService: FawryServiceProvider, public alertCtrl: AlertController) {
    this.params = navParams;
    this.menuController.swipeEnable(false, 'myMenu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentAlert() {
		let alert = this.alertCtrl.create({
			title: 'Login Failed',
			subTitle: 'Your credentials are wrong',
			buttons: ['Dismiss']
		});
		alert.present();
	}


  authenticate() {
    console.log('username entered: ', this.username);
    console.log('password entered: ', this.password);
    if( this.username != undefined && this.password != undefined) 
    {
      let credentials = {'userName': this.username, 'password': this.password};
      this.fawryService.login(credentials).then((data) => {	
     //   console.log('data', data['data']);
        if (data) {
        this.service.setToken(data['data']);

        const toast = this.toastCtrl.create({
          message: 'Login successful',
          duration: 3000
          });
        toast.present();
        //  let modalPage= this.modalCtrl.create("HomePage", {username: this.username});
         // modalPage.present()
        this.navCtrl.setRoot("HomePage");
       // this.navCtrl.pop();
      }  //token is returned
    })
    .catch((err) => {
      this.password = "";
      this.username="";
      console.log(err);
      this.presentAlert();
    })
     
    }//end if
  }



  signup() {
    this.navCtrl.setRoot("SignupPage");
  }
}
