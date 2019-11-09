import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductsModule } from './modules/products/products.module';
import { CustomersModule } from './modules/customers/customers.module';
import { LoginModule } from './modules/login/login.module';
import { StoreModule } from '@ngrx/store';
import { rootReducer, INITIAL_STATE } from './modules/redux-store/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MatCardModule } from '@angular/material';


const initialState = INITIAL_STATE;

export function getInitialState() {
  return initialState;
}




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot(rootReducer, { initialState: getInitialState }),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    ProductsModule,
    CustomersModule,
    LoginModule,
    DashboardModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
