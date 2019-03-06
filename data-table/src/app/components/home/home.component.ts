import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {
    document.title = "DataTable App";
  }
}
