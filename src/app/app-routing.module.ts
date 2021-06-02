import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HomeComponent } from './pages/main-page/home/home.component';
import { UsersComponent } from './pages/main-page/users/users.component';
import { CategoriesComponent } from './pages/main-page/categories/categories.component';
import { SubcategoriesComponent } from './pages/main-page/subcategories/subcategories.component';
import { StoresComponent } from './pages/main-page/stores/stores.component';
import { ProductsComponent } from './pages/main-page/products/products.component';
import { OrdersComponent } from './pages/main-page/orders/orders.component';
import { SalesComponent } from './pages/main-page/sales/sales.component';
import { DisputesComponent } from './pages/main-page/disputes/disputes.component';
import { MessagesComponent } from './pages/main-page/messages/messages.component';

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
	  	{path: 'messages', component: MessagesComponent}
	  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
