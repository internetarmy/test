import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./app.welcome.html",
  styleUrls: ["./app.welcome.css"]
})
export class Welcome implements OnInit {
  message = "Welcome component text here..";
  loggedUser = "";
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.loggedUser = this.router.snapshot.params["name"];
    console.log(this.router.snapshot.params["name"]);
  }
}
