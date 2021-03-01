import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../app/nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { HighlighterDirective } from '../app/directives/highlighter.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { StudentComponent } from './student/student.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    RegisterComponent,
    PricingComponent,
    LoginComponent,
    HighlighterDirective,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
