import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Component/HomePage/nav-bar/nav-bar.component';
import { HomePageProductComponent } from './Component/HomePage/home-page-product/home-page-product.component';
import { ProductsCategoriesComponent } from './Component/HomePage/products-categories/products-categories.component';
import { ProductCatageroyItemComponent } from './Component/HomePage/product-catageroy-item/product-catageroy-item.component';
// import { CategoryMenuComponent } from './Component/category-menu/category-menu.component';
import { CategoryMenuItemComponent } from './Component/CategoryMenu/category-menu-item/category-menu-item.component';
import { SliderComponent } from './Component/slider/slider.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ProfileComponent } from './Component/profile/profile.component';
// import { CartComponent } from './Component/cart/cart.component';
import { CartItemComponent } from './Component/Cart/cart-item/cart-item.component';
// import { NotificationComponent } from './Component/notification/notification.component';
import { NotificationItemComponent } from './Component/Notification/notification-item/notification-item.component';
import { SignUpComponent } from './Component/Authentication/sign-up/sign-up.component';
import { LogInComponent } from './Component/Authentication/log-in/log-in.component';
import { ProductListComponent } from './Component/Product/product-list/product-list.component';
import { ProductComponent } from './Component/Product/product/product.component';
import { ProductDetailComponent } from './Component/Product/product-detail/product-detail.component';
import { InvoiceDisplayComponent } from './Component/Product/invoice-display/invoice-display.component';
import { FilterComponent } from './Component/filter/filter.component';
import { SellerNavBarComponent } from './Component/Seller/seller-nav-bar/seller-nav-bar.component';
import { ProductAddComponent } from './Component/Seller/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageProductComponent,
    ProductsCategoriesComponent,
    ProductCatageroyItemComponent,
    // CategoryMenuComponent,
    CategoryMenuItemComponent,
    SliderComponent,
    FooterComponent,
    ProfileComponent,
    // CartComponent,
    CartItemComponent,
    // NotificationComponent,
    NotificationItemComponent,
    SignUpComponent,
    LogInComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent,
    InvoiceDisplayComponent,
    FilterComponent,
    SellerNavBarComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//ttttttttttttttttttttttttttttttttt

//bifbsofbjnfdb
