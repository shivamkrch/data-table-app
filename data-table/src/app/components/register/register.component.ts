import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  pwdHS: boolean;
  name: string;
  username: string;
  password: string;
  usernameAvb: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.pwdHS = false;
    document.title = "Register | DataTable App";
  }

  log(x) {
    console.log(x);
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
  register() {
    const user = {
      name: this.name,
      username: this.username,
      password: this.password
    };
    this.authService.registerUser(user).subscribe((data: any) => {
      if (data.success) {
        this.router.navigate(["/login"]);
      }
    });
  }
  checkUsername() {
    if (this.username.length >= 4) {
      this.authService.checkUsername(this.username).subscribe((data: any) => {
        this.usernameAvb = data.avb;
      });
    }
  }
}
