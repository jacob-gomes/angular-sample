import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginService } from './login/login.service';
import { AppRoutingModule } from './app.routing-module';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ContactsDetailComponent } from './contacts/contacts.details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsCreateOrUpdateComponent } from './contacts/contacts.createorupdate.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCreateOrUpdateComponent } from './admin/admin.createorupdate.component';
import { AdminUserDetailComponent } from './admin/admin.userdetails.component';
import { AdminService } from './admin/admin.service';
import { ContactsService } from './contacts/contacts.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ContactsComponent,
    ContactsDetailComponent,
    ContactsCreateOrUpdateComponent,
    AdminComponent,
    AdminCreateOrUpdateComponent,
    AdminUserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
   
  ],
  providers: [
    LoginService,
    AdminService,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
