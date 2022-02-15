import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { BookComponent } from './components/pages/book/book.component';
import { MemberComponent } from './components/pages/member/member.component';
import { MemberAddComponent } from './components/pages/member-add/member-add.component';
import { MemberEditComponent } from './components/pages/member-edit/member-edit.component';
import { MainComponent } from './components/pages/main/main.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { StaffAddComponent } from './components/pages/staff-add/staff-add.component';
import { StaffEditComponent } from './components/pages/staff-edit/staff-edit.component';
import { BookAddComponent } from './components/pages/book-add/book-add.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookEditComponent } from './components/pages/book-edit/book-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookComponent,
    MemberComponent,
    MemberAddComponent,
    MemberEditComponent,
    MainComponent,
    StaffComponent,
    StaffAddComponent,
    StaffEditComponent,
    BookAddComponent,
    BookEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
