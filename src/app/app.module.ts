
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient }from '@angular/common/http';
import { AppComponent } from './app.component';
//Angular Router Module
import { RouterModule, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { CategoryComponent } from './category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NavbarComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterTestingModule,
    RouterModule.forRoot([
      { path:'', component: LandingPageComponent },
      { path: 'categories', component: CategoryComponent},
      { path: 'subcategories', component: SubCategoryComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
