import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from './contacts.service';
import { IContactModel } from './contacts.model';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html'
  })
  export class ContactsComponent implements OnInit {
    userName: string;
    contacts: IContactModel[];

    constructor(private  contactsService: ContactsService, private router: Router) {}

    ngOnInit(): void { 
        console.log("In contact");
        this.userName = localStorage.getItem("userId");
        this.contactsService.getAllContacts(this.userName)
        .subscribe((data) => this.contacts = data);
    }

    getDetails(contactId: string ): void{
        this.router.navigateByUrl('/user/(postlogin:contact/'+contactId+')');
    }
    update(contactId: string): void{
        this.router.navigateByUrl('/user/(postlogin:new-contact/'+contactId+')');
    }

    delete(contactId: string):void{
        this.contactsService.deleteContact(contactId).
        subscribe();
        //refresh page
        this.contactsService.getAllContacts(this.userName)
        .subscribe((data) => this.contacts = data);
    }

  }