import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })
  export class UserComponent implements OnInit {
    isAdmin : boolean;
    userId : string;

    constructor( private router: Router) {}

    ngOnInit(): void {        
      this.userId = localStorage.getItem("userId");
      this.isAdmin = localStorage.getItem("isAdmin") == "true";
    }

    logout(): void{
        localStorage.removeItem("userId");
        localStorage.removeItem("isAdmin");
        this.router.navigate(['/login']);
    }
  }