import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import {FormsModule}  from '@angular/forms';
import { ProductService } from './product.service';
import {CustomFormsModule} from  'ng2-validation';
import { DataTableModule } from 'angular5-data-table';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    
    
  ],
  imports: [
    DataTableModule.forRoot(),
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        RouterModule.forRoot([
          {path:'',component:HomeComponent},
          {path:'products',component:ProductsComponent},
          {path:'login',component:LoginComponent},
          {path:'shopping-cart',component:ShoppingCartComponent},

          {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuardService]},
          
          {path:'order-success',
          component:OrderSuccessComponent,
          canActivate:[AuthGuardService,AdminAuthGuardService]},
          
          {path:'my/Orders',component:MyOrdersComponent,canActivate:[AuthGuardService]},

          {path:'admin/orders',
          component:AdminOrdersComponent,
          canActivate:[AuthGuardService,AdminAuthGuardService]},
         
          {path:'admin/products/new',
          component:ProductFormComponent,
          canActivate:[AuthGuardService,AdminAuthGuardService]},   

          
          {path:'admin/products/:id',
          component:ProductFormComponent,
          canActivate:[AuthGuardService,AdminAuthGuardService]},        
          
          {path:'admin/products',
          component:AdminProductsComponent,
          canActivate:[AuthGuardService,AdminAuthGuardService]},
        
         
        ])
        
      

  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
