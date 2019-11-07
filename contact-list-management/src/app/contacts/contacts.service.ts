import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { IContactModel } from './contacts.model';
@Injectable()

export class ContactsService {
    
    private getAllContactsUrl = 'http://localhost:8080/contacts/user/';
    private getContactsDetailsUrl = 'http://localhost:8080/contacts/';
    constructor(private http: HttpClient) {}

    getAllContacts(userid :String): Observable<IContactModel[]> {
        return this.http.get<IContactModel[]>(this.getAllContactsUrl + userid);
    }

    getAllContactDetails(contactId: string): Observable<IContactModel> {
        return this.http.get<IContactModel>(this.getContactsDetailsUrl + contactId);
    }

    deleteContact(contactId: string): Observable<any> {
        return this.http.delete<any>(this.getContactsDetailsUrl + contactId);
    }

    createOrUpdate(contact: IContactModel): Observable<any>  {
        return this.http.post<any>(this.getContactsDetailsUrl, contact);
    }
}