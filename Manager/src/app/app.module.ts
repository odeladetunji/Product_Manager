import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotificationUpgradeComponent } from './notification-upgrade/notification-upgrade.component';
import { NotificationUpdateComponent } from './notification-update/notification-update.component';
import { CustomNotificationComponent } from './custom-notification/custom-notification.component';
import { ReinitializeApplicationComponent } from './reinitialize-application/reinitialize-application.component';
import { BroadsheetComponent } from './broadsheet/broadsheet.component';
import { InitLoaderComponent } from './init-loader/init-loader.component';
import { BigNavComponent } from './big-nav/big-nav.component';
import { SettingsComponent } from './settings/settings.component';
import { OutletsComponent } from './outlets/outlets.component';
import { NewreportComponent } from './newreport/newreport.component';
import { MissingreportsComponent } from './missingreports/missingreports.component';
import { ThresholdlistComponent } from './thresholdlist/thresholdlist.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { IndividualStoreComponent } from './individual-store/individual-store.component';
import { WarehouseDetailsComponent } from './warehouse-details/warehouse-details.component';
import { ReportHistoryComponent } from './report-history/report-history.component';
import { SalesComponent } from './sales/sales.component';
import { DiscountListComponent } from './discount-list/discount-list.component';
import { DiscountedDetailsComponent } from './discounted-details/discounted-details.component';
import { RestockWarehouseComponent } from './restock-warehouse/restock-warehouse.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsSettingsComponent } from './products-settings/products-settings.component';
import { ThresholdDetailsComponent } from './threshold-details/threshold-details.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { ProcurementRequestComponent } from './procurement-request/procurement-request.component';
import { ProcurementDetailsComponent } from './procurement-details/procurement-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftNavComponent,
    CompanyRegistrationComponent,
    SubscriptionPageComponent,
    AddProductComponent,
    LoginComponent,
    ProductOverviewComponent,
    DashBoardComponent,
    ProductListComponent,
    NotificationUpgradeComponent,
    NotificationUpdateComponent,
    CustomNotificationComponent,
    ReinitializeApplicationComponent,
    BroadsheetComponent,
    InitLoaderComponent,
    BigNavComponent,
    SettingsComponent,
    OutletsComponent,
    NewreportComponent,
    MissingreportsComponent,
    ThresholdlistComponent,
    WarehousesComponent,
    IndividualStoreComponent,
    WarehouseDetailsComponent,
    ReportHistoryComponent,
    SalesComponent,
    DiscountListComponent,
    DiscountedDetailsComponent,
    RestockWarehouseComponent,
    ProductsDetailsComponent,
    ProductsSettingsComponent,
    ThresholdDetailsComponent,
    RequestStatusComponent,
    RequestDetailsComponent,
    ProcurementRequestComponent,
    ProcurementDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
