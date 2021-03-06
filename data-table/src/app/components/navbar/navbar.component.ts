import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
  logout() {
    localStorage.removeItem("username");
  }
}
