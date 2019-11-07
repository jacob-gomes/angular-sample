import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { IUserModel } from '../user/user.model';
import { AdminService } from './admin.service';

@Component({
    selector: 'app-user-create-update',
    templateUrl: './admin.createorupdate.component.html'
  })
  export class AdminCreateOrUpdateComponent implements OnInit {
    userId: string;
    user: IUserModel;

    constructor(private  adminService: AdminService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void { 
        this.userId = this.route.snapshot.params['userId'];
        if(this.userId){
            this.adminService.getUser(this.userId)
            .subscribe((data) => this.user = data);
        }
    }

    onSubmit():void{
        this.user.userId = this.user.emailId;
        this.adminService.createOrUpdateUser(this.user).subscribe();
        this.router.navigateByUrl('/user/(postlogin:user-management)');
    }

  }