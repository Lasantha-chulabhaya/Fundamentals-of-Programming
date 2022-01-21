import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule , 
    ProductsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
