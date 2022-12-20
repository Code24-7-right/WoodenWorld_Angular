import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import* as toastr from 'toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalPrice:any = 0;
  paymentDetails:any;
  buttonColor="black"; buttonType="Buy";
  isCustomSize=250;
  buttonHeight=50;
  isTop=window===window.top;
  paymentRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[{
      type:"CARD",
      parameters:{
        allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
        allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
      },
      tokenizationSpecification:{
        type:"PAYMENT_GATEWAY",
        parameters:{
          gateway:"example",
          gatewayMerchantId :"exampleGatewayMerchantId"
        }
      }
    }],
    merchantInfo:{
      merchantId:"12345678901234567890",
      mechantName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPrice:"1.00",
      currencyCode:"USD",
      countryCode:"US",

    }
    
  };
  
  onLoadPaymentData(event:any){
    console.log("Load Payment Data ",event.detail)

  }
  event:any;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.totalPrice = this.route.snapshot.paramMap.get('totalPrice');
  }
  payment(paymentForm:any){
    this.paymentDetails = paymentForm;
    this.showToastr();
    this.router.navigate(['']);
  }
  showToastr(){
    toastr.success("Order placed Successfully");
  }
}
