import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  hero;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    let id;
    this.route.params.subscribe(param => (id = param.id));
    this.authService.getDetails(id).subscribe(res => (this.hero = res));
  }
  update() {
    this.authService.updateUser(this.hero).subscribe((res: any) => {
      if (res.success) {
        this.router.navigate(["dashboard"]);
      }
    });
  }
}
