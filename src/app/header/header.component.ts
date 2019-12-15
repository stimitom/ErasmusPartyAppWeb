import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:firebase.User; 
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe( user => { 
      this.user = user; 
    })
  }

  login(){ 
    this.router.navigate(['/login']); 
  }

  logout(){ 
    this.auth.logout(); 
    this.router.navigate(['/register']); 
  }

}
