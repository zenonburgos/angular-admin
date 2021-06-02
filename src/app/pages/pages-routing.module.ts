import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './main-page/home/home.component';
import { UsersComponent } from './main-page/users/users.component';
import { CategoriesComponent } from './main-page/categories/categories.component';
import { SubcategoriesComponent } from './main-page/subcategories/subcategories.component';
import { StoresComponent } from './main-page/stores/stores.component';
import { ProductsComponent } from './main-page/products/products.component';
import { OrdersComponent } from './main-page/orders/orders.component';
import { SalesComponent } from './main-page/sales/sales.component';
import { DisputesComponent } from './main-page/disputes/disputes.component';
import { MessagesComponent } from './main-page/messages/messages.component';

const routes: Routes = [
	{ path: '', 
	  component: MainPageComponent,
	  children: [
	  	{path: '', component: HomeComponent},
	  	{path: 'users', component: UsersComponent},
	  	{path: 'categories', component: CategoriesComponent},
	  	{path: 'subcategories', component: SubcategoriesComponent},
	  	{path: 'stores', component: StoresComponent},
	  	{path: 'products', component: ProductsComponent},
	  	{path: 'orders', component: OrdersComponent},
	  	{path: 'sales', component: SalesComponent},
	  	{path: 'disputes', component: DisputesComponent},
	  	{path: 'messages', component: MessagesComponent}
	  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
