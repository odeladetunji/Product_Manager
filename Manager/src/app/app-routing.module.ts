import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SettingsComponent } from './settings/settings.component';
import { OutletsComponent } from './outlets/outlets.component';
import { MissingreportsComponent } from './missingreports/missingreports.component';
import { NewreportComponent } from './newreport/newreport.component';
import { ThresholdlistComponent } from './thresholdlist/thresholdlist.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { IndividualStoreComponent } from './individual-store/individual-store.component';
import { WarehouseDetailsComponent } from './warehouse-details/warehouse-details.component';
import { ReportHistoryComponent } from './report-history/report-history.component';
import { SalesComponent } from './sales/sales.component';
import { DiscountListComponent } from './discount-list/discount-list.component';
import { DiscountedDetailsComponent } from './discounted-details/discounted-details.component';
import { RestockWarehouseComponent } from './restock-warehouse/restock-warehouse.component';
import { ThresholdDetailsComponent } from './threshold-details/threshold-details.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { ProcurementRequestComponent } from './procurement-request/procurement-request.component';
import { ProcurementDetailsComponent } from './procurement-details/procurement-details.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'companyRegistration', component: CompanyRegistrationComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'subscription', component: SubscriptionPageComponent},
  {path: 'productOverview', component: ProductOverviewComponent},
  {path: 'productList', component: ProductListComponent},
  {path: 'dashBoard', component: DashBoardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'outlets', component: OutletsComponent},
  {path: 'newreport', component: NewreportComponent},
  {path: 'missingreports', component: MissingreportsComponent},
  {path: 'thresholdlist', component: ThresholdlistComponent},
  {path: 'warehouses', component: WarehousesComponent},
  {path: 'individualstores', component: IndividualStoreComponent},
  {path: 'warehousedetails', component: WarehouseDetailsComponent},
  {path: 'reporthistory', component: ReportHistoryComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'discountedsales', component: DiscountListComponent},
  {path: 'discounteddetails', component: DiscountedDetailsComponent},
  {path: 'restockwarehouse', component: RestockWarehouseComponent},
  {path: 'thresholddetails', component: ThresholdDetailsComponent},
  {path: 'thisproduct', component: ProductsDetailsComponent},
  {path: 'requeststatus', component: RequestStatusComponent},
  {path: 'reqestedproducts', component: RequestDetailsComponent},
  {path: 'showprocurementrequest', component: ProcurementRequestComponent},
  {path: 'procurementdetails', component: ProcurementDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
