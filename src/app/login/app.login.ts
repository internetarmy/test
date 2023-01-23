import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./app.login.html",
  styleUrls: ["./app.login.css"]
})
export class Login {
  username = "siva";
  password = "";
  errorMessage = "Invalid Credentials.";
  isInvalidCredentials = false;
  constructor(private router: Router) {}
  handleLogin() {
    console.log(this.username + ":::" + this.password);
    // this.errorMessage="Invalid Credentials.";
    if (this.username === "siva" && this.password === "123456") {
      this.router.navigate(["welcome", this.username]);
      this.isInvalidCredentials = false;
    } else {
      this.isInvalidCredentials = true;
    }
  }
}
