import { Component, OnInit } from '@angular/core';
import { Credentials } from "../shared/models/credentials";
import { AuthenticationService } from "../shared/services/authentication.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model: Credentials;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.model = new Credentials();
  }

  signIn() {
    this.authenticationService.authenticate(this.model)
      .subscribe(data => this.router.navigate(['/']));
  }

}
