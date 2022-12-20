import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BillingComponent } from './billing/billing.component';
import { CartoperationsComponent } from './cartoperations/cartoperations.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedInHeaderComponent } from './logged-in-header/logged-in-header.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductcategoryoperationsComponent } from './productcategoryoperations/productcategoryoperations.component';
import { ProductoperationsComponent } from './productoperations/productoperations.component';
import { ShowProductByCategoryComponent } from './show-product-by-category/show-product-by-category.component';
import { ShowcartitemsComponent } from './showcartitems/showcartitems.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UseroperationsComponent } from './useroperations/useroperations.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'HomePage/:uid',canActivate:[AuthGuard],component:HomepageComponent},
  {path:'productsByCategory/:pcid',component:ShowProductByCategoryComponent},
  {path:'HOME/:uid',component:HomepageComponent},
  {path:'Billing/:totalPrice',component:BillingComponent},
  {path:'Payment/:totalPrice',component:PaymentComponent},
  //{path:'Payment/:product',component:PaymentComponent},
  {path:'Home',component:HomepageComponent},
  {path:'Login/:pid',component:LoginComponent},
  {path:'UserCart/:uid/:pid',component:UsercartComponent},
  {path:'Header',component:HeaderComponent,
  children:[
    { path:'Login',component:LoginComponent},
  {path:'Login/:pid',component:LoginComponent}]},
  {path:'LoggenInHeader',component:LoggedInHeaderComponent},
  {path:'ShowCartItems/:userid',component:ShowcartitemsComponent},
  { path:'Login',component:LoginComponent },
  { path:'AdminOperations',canActivate:[AuthGuard],component:AdminOperationsComponent,
  children:[
    { path:'ProductOperations',component:ProductoperationsComponent},
    { path:'ProductCategoryOperations',component:ProductcategoryoperationsComponent},
    {path:'UserOperations',component:UseroperationsComponent},
    {path:'CartOperations',component:CartoperationsComponent}
  ]},
  { path:'UserRegistration',component:UserregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
[/*AdminOperationsComponent,
ProductoperationsComponent,
ProductcategoryoperationsComponent,
CartoperationsComponent*/]