import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError:any; 
  constructor(private router:Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data =>{ 
      this.authError = data; 
    })

  }

  loginUser(frm){ 
    this.auth.login(frm.value.email, frm.value.password);
  }
}
