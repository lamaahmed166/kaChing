import {Injectable} from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class Service {
    token: string;
    isAuth: boolean;
    user_id: any;
    cart: any[];
    orders: any[];
    isMerchant: boolean;
    
  constructor(private jwtHelper: JwtHelper) {
    this.user_id=0;
    this.token = "init";
    this.isAuth=false;
    this.isMerchant= false;
  }


  getToken() {
    return this.token;
  }
  isAuthenticated(){
    return this.isAuth;
  }
  setToken(token){
      console.log('token: ', token);
    let data=  this.jwtHelper.decodeToken(token);
    this.user_id=data._id;
    this.token=token;
    this.isAuth=true;

    for( let e in data){
       // console.log(e);
        if(e == 'merchant'){
            this.user_id= data['merchant']['_id'];
            this.cart = data['merchant']['cart'];
            this.isMerchant= true;
            console.log('user data: ', data['merchant']['_id']);         
        }
    
    
        if(e == 'customer') {
            this.user_id= data['customer']['_id'];
            this.cart = data['customer']['cart'];
            console.log('user data: ', data['customer']['_id']);
            }
    }
}
  getId(){
      console.log('id $ service: ', this.user_id);
    return this.user_id;
  }

  getType() {
        return this.isMerchant;
  }

 getCart() {
   return this.cart;
 }
 setCart(cart) {
   this.cart = cart;
   console.log('updated cart: ', this.cart);
 }

  public getOrders() {
    return this.orders;
  }

  public addOrder(order: any) {
     this.orders.push(order);
}
}
