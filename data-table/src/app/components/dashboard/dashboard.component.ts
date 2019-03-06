import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getData().subscribe(res => (this.data = res));
    document.title = "Dashboard | DataTable App";
  }
  delete(id) {
    this.authService.deleteUser(id).subscribe(res => console.log(res));
    this.authService.getData().subscribe(res => (this.data = res));
  }
}
