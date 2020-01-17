import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

// Components
import { UsersComponent } from './users.component';
import { BusinessComponent } from './business/business.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NewBusinessComponent } from './new-business/new-business.component';
import { NewReturnsComponent } from './new-returns/new-returns.component';
import { ReturnComponent } from './return/return.component';
import { ReturnsComponent } from './returns/returns.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { UserOptionsComponent } from './user-options/user-options.component';


@NgModule({
  declarations: [
    UsersComponent,
    BusinessComponent,
    BusinessListComponent,
    DashboardComponent, HeaderComponent,
    MainMenuComponent,
    NewBusinessComponent,
    NewReturnsComponent,
    ReturnComponent,
    ReturnsComponent,
    UserSummaryComponent,
    InvoiceComponent,
    InvoicesComponent,
    NewInvoiceComponent,
    UserOptionsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
