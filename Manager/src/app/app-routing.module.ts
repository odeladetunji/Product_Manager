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
  {path: 'restockwarehouse', component: RestockWarehouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
