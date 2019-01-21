import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FawryServiceProvider } from '../providers/fawry-service/fawry-service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { Service } from './service';
import { JwtHelper } from 'angular2-jwt';
import { OrdersPage } from '../pages/orders/orders';
import { PlaceOrderPage } from '../pages/place-order/place-order';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    LoginPage,
    ListPage, 
    OrdersPage,
    PlaceOrderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    LoginPage,
    OrdersPage,
    ListPage, 
    PlaceOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FawryServiceProvider,
    Service,
    JwtHelper
  ]
})
export class AppModule {}
