import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root"
})
export class Auth2Guard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.loggedIn()) return true;
    else {
      this.router.navigate(["dashboard"]);
      return false;
    }
  }
}
