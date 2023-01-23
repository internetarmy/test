import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Login } from "./login/app.login";
import { Welcome } from "./welcome/app.welcome";
import { Error } from "./error/app.error";
import { ListTodos } from "./list-todos/app.list-todos";

const routes: Routes = [
  { path: "", component: Login },
  // { path: "/", component: Login },
  { path: "login", component: Login },
  { path: "welcome/:name", component: Welcome },
  { path: "list-todos", component: ListTodos },
  { path: "**", component: Error }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
