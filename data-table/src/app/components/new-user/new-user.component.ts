import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  hero = {
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: ""
    },
    phone: "",
    website: "",
    company: ""
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  insert() {
    this.authService.insert(this.hero).subscribe((res: any) => {
      if (res.success) this.router.navigate(["dashboard"]);
    });
  }
}
