import { Component, ViewChild, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './modules/login/models/userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProductManagement';
  needsRedirect = true;
  loggedUser: User = new User();

  ngOnInit(): void {
    this.loggedUser.mapToUser(JSON.parse(sessionStorage["userDetails"]));
  }


  //to aviod these calculations for across tab login,
  //we can switch to session starage, and logged in user
  //will be per tab only
  // @HostListener('window:beforeunload', ['$event'])
  // unloadHandler(event) {
  //   localStorage.removeItem("user");

  //   return '';

  // }


  @ViewChild("sidenav", { static: false }) sidenav;
  @ViewChild("main", { static: false }) main;

  
  isLoggedIn(): boolean {


    // let isUserLoggedIn = !!localStorage["user"];
    let isUserLoggedIn = !!sessionStorage["user"];

    if (!isUserLoggedIn && this.needsRedirect) {
      this.needsRedirect = false;
      this.closeNav();
      this.router.navigate(["login"]);
    }
    if (isUserLoggedIn)
      this.needsRedirect = true;

    return isUserLoggedIn;
  }

  constructor(private router: Router) {
  }

  linkClick(link: string) {
    this.router.navigate(['/' + link]);
  }

  openNav() {
    if (this.sidenav && this.main) {
      this.sidenav.nativeElement.style.width = "250px";
      this.main.nativeElement.style.marginLeft = "250px";
    }
  }

  closeNav() {
    if (this.sidenav && this.main) {
      this.sidenav.nativeElement.style.width = "0";
      this.main.nativeElement.style.marginLeft = "0";
    }
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  logout() {
    sessionStorage.removeItem("user");
  }
}

