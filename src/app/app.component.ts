import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular v19';
  loginSuccess = false;
  loginFailed = false;
  username: string = "";
  password: string = "";
  currentSsoKey: string = "";
  ssoKeyFromA4200: string | null = "";

  ngOnInit() {
    this.ssoKeyFromA4200 = this.getSSOKey();
    if (this.ssoKeyFromA4200) {
      this.loginSuccess = true;
    } else {
      this.loginFailed = true;
    }
    console.log("From 4200:", this.ssoKeyFromA4200);
  }

  login() {
    console.log("Username", this.username);
    console.log("Passwort", this.password);
    this.generateSSOKey();
    console.log('SSO Key', this.currentSsoKey);
  }

  generateSSOKey() {
    //TODO: set SSO Key (Math.random ersetzen)
    localStorage.setItem('ssoKey', Math.random().toString(36).substr(2, 9));
    this.currentSsoKey = Math.random().toString(36).substr(2, 9);
  }

  getSSOKey() {
    return localStorage.getItem('ssoKey');
  }
}
