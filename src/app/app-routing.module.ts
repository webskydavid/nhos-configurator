import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DeviceDetailsComponent } from "./device-details/device-details.component";
import { DeviceListComponent } from "./device-list/device-list.component";
import { AlgorithmFormComponent } from "./algorithm-form/algorithm-form.component";

const routes: Routes = [
  { path: "", component: DeviceListComponent },
  {
    path: "device-details/:device_id",
    component: DeviceDetailsComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,

    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
