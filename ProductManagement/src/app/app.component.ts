import { Component, ViewChild, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProductManagement';
  needsRedirect = true;

  ngOnInit(): void {
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event) {
    localStorage.removeItem("user");

    return '';

  }


  @ViewChild("mySidenav", { static: false }) mySidenav;
  @ViewChild("main", { static: false }) main;

  //to aviod these calculations for across tab login,
  //we can switch to session starage, and logged in user
  //will be per tab only
  isLoggedIn(): boolean {
    

    // let isUserLoggedIn = !!localStorage["user"];
    let isUserLoggedIn = !!sessionStorage["user"];

    if (!isUserLoggedIn && this.needsRedirect) {
      this.needsRedirect = false;
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
    this.mySidenav.nativeElement.style.width = "250px";
    this.main.nativeElement.style.marginLeft = "250px";
  }

  closeNav() {
    this.mySidenav.nativeElement.style.width = "0";
    this.main.nativeElement.style.marginLeft = "0";
  }

  navigate(route) {
    this.router.navigate([route]);
  }
}
