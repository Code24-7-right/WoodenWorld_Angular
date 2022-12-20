import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { LoginComponent } from './login/login.component';
import { ProductoperationsComponent } from './productoperations/productoperations.component';
import { ProductcategoryoperationsComponent } from './productcategoryoperations/productcategoryoperations.component';
import { UseroperationsComponent } from './useroperations/useroperations.component';
import { CartoperationsComponent } from './cartoperations/cartoperations.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedInHeaderComponent } from './logged-in-header/logged-in-header.component';
import { UsercartComponent } from './usercart/usercart.component';
import { ShowcartitemsComponent } from './showcartitems/showcartitems.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { ShowProductByCategoryComponent } from './show-product-by-category/show-product-by-category.component';
import { BillingComponent } from './billing/billing.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminOperationsComponent,
    UserregistrationComponent,
    LoginComponent,
    ProductoperationsComponent,
    ProductcategoryoperationsComponent,
    UseroperationsComponent,
    CartoperationsComponent,
    HomepageComponent,
    LoggedInHeaderComponent,
    UsercartComponent,
    ShowcartitemsComponent,
    PaymentComponent,
    AdminheaderComponent,
    ShowProductByCategoryComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    HttpClientJsonpModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
