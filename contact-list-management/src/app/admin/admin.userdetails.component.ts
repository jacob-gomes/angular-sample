import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IUserModel } from '../user/user.model';
import { AdminService } from './admin.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './admin.userdetails.component.html'
  })
  export class AdminUserDetailComponent implements OnInit {
    userId: string;
    user: IUserModel;

    constructor(private  contactsService: AdminService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void { 
        this.userId = this.route.snapshot.params['userId'];
        this.contactsService.getUser(this.userId)
        .subscribe((data) => this.user = data);
    }

    onBack():void{
        this.router.navigateByUrl('/user/(postlogin:user-management)');
    }

  }