import { Component, OnChanges, SimpleChanges } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnChanges{
  title = "MyVac"
  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService
  ) {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
   }

  ngOnChanges(change:SimpleChanges) {
   this.printUser(change.user.currentValue)
  } 
  printUser(user){
    console.log(user)
  }  
  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

}