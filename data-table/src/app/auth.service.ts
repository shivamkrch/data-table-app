import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user;
  constructor(private http: HttpClient) {}
  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post("/authenticate", user, {
      headers: headers,
      responseType: "json"
    });
  }
  storeUserData(user) {
    localStorage.setItem("username", user.username);
    this.user = user;
  }
  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post("/register", user, {
      headers: headers,
      responseType: "json"
    });
  }
  checkUsername(username) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.get(`/checkUsername?ip=${username}`, {
      headers: headers,
      responseType: "json"
    });
  }
  getData() {
    return this.http.get("/data", { responseType: "json" });
  }
  getDetails(id) {
    return this.http.get(`/user?id=${id}`, { responseType: "json" });
  }
  deleteUser(id) {
    return this.http.get(`/deleteUser?id=${id}`, { responseType: "json" });
  }
  updateUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post(`/updateUser`, user, {
      headers: headers,
      responseType: "json"
    });
  }
  insert(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post(`/insert`, user, {
      headers: headers,
      responseType: "json"
    });
  }
  loggedIn() {
    if (localStorage.getItem("username")) return true;
    else return false;
  }
}
