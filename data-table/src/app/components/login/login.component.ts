import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  pwdHS: boolean;
  username: string;
  password: string;
  err: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.pwdHS = false;
    this.err = false;
    document.title = "Login | DataTable App";
  }
  pwdHST() {
    var x = document.getElementById("password");
    if (x.getAttribute("type") == "password") {
      x.setAttribute("type", "text");
      this.pwdHS = !this.pwdHS;
    } else {
      x.setAttribute("type", "password");
      this.pwdHS = !this.pwdHS;
    }
  }
  login() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe((data: any) => {
      if (data.success) {
        this.authService.storeUserData(user);
        this.err = false;
        this.router.navigate(["dashboard"]);
      } else {
        this.err = true;
      }
    });
  }
}
