import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  @ViewChild("focusableSubmit", { static: false }) focusableSubmit;

  passwordToCompare: any = 'admin';

  ngOnInit() {
    this.passwordToCompare = Md5.hashStr(this.passwordToCompare);
  }

  login(): void {
    if (this.username == 'admin' && Md5.hashStr(this.password) == this.passwordToCompare) {
      //localStorage["user"] = true;
      sessionStorage["user"] = true;
      sessionStorage["userDetails"] = JSON.stringify({
        name: "Admin Admin",
        role: "admin"
      });
      this.router.navigate(["/"]);
    } else {
      this.username = "";
      this.password = "";
    }
  }

  onEnterClick() {
    this.focusableSubmit._elementRef.nativeElement.click();
  }

}
