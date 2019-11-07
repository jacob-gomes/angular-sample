import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { IUserModel } from '../user/user.model';
@Injectable()

export class AdminService {
    
    private getAllUsersUrl = 'https://localhost:8080/user/';
    constructor(private http: HttpClient) {}

    getAllUsers(): Observable<IUserModel[]> {
        return this.http.get<IUserModel[]>(this.getAllUsersUrl );
    }

    getUser(userId: string): Observable<IUserModel> {
        return this.http.get<IUserModel>(this.getAllUsersUrl + userId);
    }

    deleteUser(userId: string): Observable<any> {
        return this.http.delete<any>(this.getAllUsersUrl + userId);
    }

    createOrUpdateUser(user: IUserModel): Observable<any>  {
        return this.http.post<any>(this.getAllUsersUrl, user);
    }
}