import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FawryServiceProvider } from '../../providers/fawry-service/fawry-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  isCustomer : boolean = false;
  username: String; 
  password: String;
  email: String;
  address: String;
  mobile: String;
  type: String;
  hasVisa: any;
  isVisa: boolean = false;
  cardNumber: String="empty";
  expiryYear: String="empty";
  expiryMonth: String="empty";
  cvv: String="empty";
  locale: String= "0";
  confirmPassword: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public fawryService: FawryServiceProvider, public alertCtrl: AlertController) {


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  presentAlert() {
		let alert = this.alertCtrl.create({
			title: 'Missing Credentials',
			subTitle: 'Sorry, You must fill in the required enteries to sign up!',
			buttons: ['Dismiss']
		});
		alert.present();
	}

  check() {
    if(this.type == 'customer') {
      this.isCustomer = true;
      console.log('customer account being created....')
    }
    else 
    {
      this.isCustomer = false;
    }
  }

  checkVisa() {
    if(this.hasVisa == 'yes') {
      this.isVisa = true;
      console.log('customer has visa....')
    }
    else 
    {
      this.isVisa = false;
    }
  }
  createAccount() {
    console.log('username: ', this.username);
    console.log('password: ', this.password);
    console.log('email: ', this.email);
    console.log('mobile: ', this.mobile);
    console.log('address: ', this.address);
    if(this.type == 'customer') {

        if(this.username == undefined  || this.password == undefined
        || this.email == undefined || this.mobile == undefined 
        || this.address == undefined || this.confirmPassword == undefined || this.confirmPassword != this.password) {
            this.presentAlert();
        }
        else {
      let customer = {'userName': this.username, 'password': this.password, 'confirmPassword': this.confirmPassword, 'locale':this.locale, 'customerEmail': this.email, 'customerMobile': this.mobile, 'address': this.address, 'cardNumber': this.cardNumber, 'expiryYear':this.expiryYear, 'expiryMonth': this.expiryMonth, 'cvv':this.cvv}

      this.fawryService.signupCustomer(customer).then((data) => {
        console.log('sign up data returned: ', data);
        const toast = this.toastCtrl.create({
			  message: 'Sign Up is successful!',
			  duration: 3000
		    });
        toast.present();
        this.navCtrl.getPrevious();
         }).catch((err) => {
        console.log('err: ', err);
      });
    }
  }//end if customer

  if(this.type == 'merchant') {
    console.log('merchant signing up..');
    

    if(this.username == undefined  || this.password == undefined
      || this.confirmPassword == undefined
      || this.email == undefined) {
          this.presentAlert();
      }
      else {
    let merchant = {'userName': this.username, 'password': this.password, 'confirmPassword':this.confirmPassword, 'merchantEmail': this.email};

    this.fawryService.signupMerchant(merchant).then((data) => {
      console.log('sign up data returned: ', data);
      const toast = this.toastCtrl.create({
      message: 'Sign Up is successful!',
      duration: 3000
      });
      toast.present();
      this.navCtrl.getPrevious();
       }).catch((err) => {
      console.log('err: ', err);
    });
  }//end else
    }//end if merchant
  }//end method
}
