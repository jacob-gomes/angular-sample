import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserModel } from '../user/user.model';
import { AdminService } from './admin.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html'
  })
  export class AdminComponent implements OnInit {
    userName: string;
    users: IUserModel[];

    constructor(private  adminService: AdminService, private router: Router) {}

    ngOnInit(): void {
        this.adminService.getAllUsers()
        .subscribe((data) => this.users = data);
    }

    getDetails(userId: string): void{
        this.router.navigateByUrl('/user/(postlogin:users/'+userId+')');
    }
    update(userId: string): void{
        this.router.navigateByUrl('/user/(postlogin:new-user/'+userId+')');
    }

    delete(userId: string):void{
        this.adminService.deleteUser(userId).
        subscribe();
        //refresh page
        this.adminService.getAllUsers()
        .subscribe((data) => this.users = data);
    }

  }