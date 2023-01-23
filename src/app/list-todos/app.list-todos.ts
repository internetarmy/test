import { Component, OnInit } from "@angular/core";

@Component({
  selector: "list-todos",
  templateUrl: "./app.list-todos.html"
})
export class ListTodos implements OnInit {
  todos = [
    { id: 1, description: "test" },
    { id: 2, description: "1" },
    { id: 3, description: "Visit India" }
  ];

  todo = { id: 1, description: "Learn to Angular" };
  constructor() {}
  ngOnInit() {}
}
