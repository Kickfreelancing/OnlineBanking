import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './bankAdmin/login/login.component';
import { ActiveUserComponent } from './bankAdmin/active-user/active-user.component';
import { CustomerAccountRegistrationComponent } from './bankAdmin/customer-account-registration/customer-account-registration.component';
import { LoginComponent } from './BankCustomer/login/login.component';
import { BalanceEnquiryComponent } from './BankCustomer/balance-enquiry/balance-enquiry.component';
import { LossOfDebitCardComponent } from './BankCustomer/loss-of-debit-card/loss-of-debit-card.component';
import { AccountStatementComponent } from './BankCustomer/account-statement/account-statement.component';
import { RequestForOpeningAccountComponent } from './BankCustomer/request-for-opening-account/request-for-opening-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActiveUserComponent,
    CustomerAccountRegistrationComponent,
    LoginComponent,
    BalanceEnquiryComponent,
    LossOfDebitCardComponent,
    AccountStatementComponent,
    RequestForOpeningAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
