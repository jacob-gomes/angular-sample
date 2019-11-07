import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ContactsService } from './contacts.service';
import { IContactModel } from './contacts.model';
import { UUID } from 'angular2-uuid';

@Component({
    selector: 'app-contacts-create-update',
    templateUrl: './contacts.createorupdate.component.html'
  })
  export class ContactsCreateOrUpdateComponent implements OnInit {
    contactId: string;
    contact: IContactModel;

    constructor(private  contactsService: ContactsService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void { 
        this.contactId = this.route.snapshot.params['contactId'];
        if(this.contactId){
            this.contactsService.getAllContactDetails(this.contactId)
            .subscribe((data) => this.contact = data);
        }
    }

    onSubmit():void{
        this.contact.userId = localStorage.getItem("userId");
        this.contact.contactId = this.contact.emailId;
        this.contactsService.createOrUpdate(this.contact).subscribe();
        this.router.navigateByUrl('/user/(postlogin:contact-management)');
    }

  }