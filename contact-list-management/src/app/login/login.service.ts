import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ILoginResponse } from './login.response.model';
import { ILogin } from './login.request.model';

@Injectable()

export class LoginService {

    private url = 'http://localhost:8080/login';

    constructor(private http: HttpClient) {}

    loginForm( loginRequest: ILogin): Observable<ILoginResponse> {
        console.log("in service", loginRequest);
        return this.http.post<ILoginResponse>(this.url, loginRequest);
    }
}
