import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the FawryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FawryServiceProvider {

  constructor(public http: Http, public httpClient: HttpClient) {
    console.log('Hello FawryServiceProvider Provider');
    this.http= http;
  }



  
  public createCardToken(merchantCode, customerProfileId, customerMobile, customerEmail, cardNumber, expiryYear, expiryMonth, cvv): Promise<any>

  {    return new Promise((resolve, reject) => {

    let url = " https://FawryPay.fawrystaging.com/ECommerceWeb/Fawry/cards/cardToken";
    console.log('url: ', url);
        this.http.post(url, { 'merchantCode': merchantCode , 'customerProfileId' : customerProfileId, 'customerMobile': customerMobile, 'customerEmail': customerEmail,'cardNumber': cardNumber, 'expiryYear':expiryYear, 'expiryMonth':expiryMonth, 'cvv':cvv}).map(res => res.json()).subscribe(data => {
          resolve(data);
          console.log('dataaa:', data);
        },
          err => {
            console.log(err);
            reject(err)
          });

  });

  }


public getImage() 
 { return new Promise((resolve, reject) => {

  let url =  "https://FawryPay.fawrystaging.com/ECommerceWeb/Fawry/cards/cardToken"
    this.http.get(url).map(res => res.json()).subscribe(data => {
      resolve(data);
      console.log('dataaa:', data);
    },
      err => {
        console.log(err);
        reject(err)
      });

 });
} 

 login(credentials) {
  return new Promise((resolve, reject) => {
    var url =  'http://localhost:4000/api/auth/login';
//console.log(credentials);
   // let body = JSON.stringify(credentials);
    this.http.post(url, credentials).map(res => res.json()).subscribe(data => {
      resolve(data)
    },
      err => {
        reject(err)
      });
  });
}

signupCustomer(customer) {
  return new Promise((resolve, reject) => {
    var url =  'http://localhost:4000/api/auth/customerRegister';
    console.log(customer);
    this.http.post(url, customer).map(res => res.json()).subscribe(data => {
      resolve(data)
    },
      err => {
        reject(err)
      });
  });
}


signupMerchant(merchant) {
  return new Promise((resolve, reject) => {
    var url =  'http://localhost:4000/api/auth/merchantRegister';
    console.log(merchant);
    this.http.post(url, merchant).map(res => res.json()).subscribe(data => {
      resolve(data)
    },
      err => {
        reject(err)
      });
  });

}


createItem(token, item) {
  return new Promise((resolve, reject) => {

    let headers1 = new Headers();
    let auth= {'authorization':token};
    //headers1.append('x-access-token', auth);
    var url =  'http://localhost:4000/api/items/createItem';
    console.log(item);
    this.httpClient.post(url, item, {headers:{'authorization':token}}).subscribe(data => {
      resolve(data)
    },
      err => {
        reject(err)
      });
  });

}



getItems(token) {
  return new Promise((resolve, reject) => {

    var url =  'http://localhost:4000/api/items/getMyItems';
    this.httpClient.get(url, {headers:{'authorization':token}}).subscribe(data => {
      resolve(data)
    },
      err => {
        reject(err)
      });
  });

}

getOrder() {
  return new Promise((resolve, reject) => {
    let headers1 = new Headers();
    headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
    var url =  'api/v1/login';
    this.http.get(url).map(res => res.json()).subscribe(data => {
      resolve(data)
    },
      err => {
        reject(err)
      });
  });
}

}