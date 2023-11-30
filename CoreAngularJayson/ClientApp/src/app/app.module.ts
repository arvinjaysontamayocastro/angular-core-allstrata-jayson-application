import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MoneyConverterComponent } from './money-converter/money-converter.component';
import { environment } from '@env/environment';
import { MoneyFormComponent } from './money-form/money-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MoneyConverterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'money-converter', component: MoneyConverterComponent },
      { path: 'money-form', component: MoneyFormComponent },
    ])
  ],
  providers: [{
    provide: "API_BASE_URL",
    useValue: environment.apiRoot
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
