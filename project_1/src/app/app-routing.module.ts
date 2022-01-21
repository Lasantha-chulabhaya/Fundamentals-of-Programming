import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    
     path: 'Products', 
     loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
    },
     {
       path:"home",
       component:HomeComponent
     },
     {
       path:"",
       redirectTo:"home",
       pathMatch:"full"
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
