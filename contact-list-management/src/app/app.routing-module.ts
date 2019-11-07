import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdminComponent } from './admin/admin.component';
import { ContactsCreateOrUpdateComponent } from './contacts/contacts.createorupdate.component';
import { ContactsDetailComponent } from './contacts/contacts.details.component';
import { AdminCreateOrUpdateComponent } from './admin/admin.createorupdate.component';
import { AdminUserDetailComponent } from './admin/admin.userdetails.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent, children:[    
    
        {path: 'contact-management', component: ContactsComponent, outlet: 'postlogin'},
        {path: 'new-contact', component: ContactsCreateOrUpdateComponent, outlet: 'postlogin'},
        {path: 'new-contact/:contactId', component: ContactsCreateOrUpdateComponent, outlet: 'postlogin'},
        {path: 'contact/:contactId', component: ContactsDetailComponent, outlet: 'postlogin'},  
    
        {path: 'user-management', component: AdminComponent, outlet: 'postlogin'},  
        {path: 'new-user/:userId', component: AdminCreateOrUpdateComponent, outlet: 'postlogin'},
        {path: 'new-user/', component: AdminCreateOrUpdateComponent, outlet: 'postlogin'},  
        {path: 'user/:userId', component: AdminUserDetailComponent, outlet: 'postlogin'}
    ]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'}
    
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
