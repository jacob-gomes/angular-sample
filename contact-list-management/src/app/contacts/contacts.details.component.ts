import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ContactsService } from './contacts.service';
import { IContactModel } from './contacts.model';

@Component({
    selector: 'app-contacts-details',
    templateUrl: './contacts.details.component.html'
  })
  export class ContactsDetailComponent implements OnInit {
    contactId: string;
    contact: IContactModel;

    constructor(private  contactsService: ContactsService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void { 
        this.contactId = this.route.snapshot.params['contactId'];
        this.contactsService.getAllContactDetails(this.contactId)
        .subscribe((data) => this.contact = data);
    }

    onBack():void{
      this.router.navigateByUrl('/user/(postlogin:contact-management)');
    }

  }