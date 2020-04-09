import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list.component';
import { ProductPriceComponent } from './product-price.component';
import { ProductRowComponent } from './product-row.component';
import { ProductImageComponent } from './product-image.component';
import { ProductDepartmentComponent } from './product-department.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductRowComponent,
    ProductPriceComponent,
    ProductsListComponent,
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
