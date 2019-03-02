import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NewUserComponent } from "./components/new-user/new-user.component";
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NewUserComponent,
    EditUserComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
