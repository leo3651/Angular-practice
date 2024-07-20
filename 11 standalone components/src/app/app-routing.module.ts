import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Route[] = [
  {
    path: "",
    component: WelcomeComponent,
  },
  {
    path: "about",
    //component: AboutComponent,
    loadComponent: () =>
      import("./about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/routes").then((mod) => mod.DASHBOARD_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
