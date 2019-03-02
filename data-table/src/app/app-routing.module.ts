import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { RegisterComponent } from "./components/register/register.component";
import { NewUserComponent } from "./components/new-user/new-user.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guard/auth.guard";
import { Auth2Guard } from "./guard/auth2.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [Auth2Guard]
  },
  { path: "login", component: LoginComponent, canActivate: [Auth2Guard] },
  { path: "user/new", component: NewUserComponent, canActivate: [AuthGuard] },
  { path: "user/:id", component: EditUserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, Auth2Guard]
})
export class AppRoutingModule {}
