import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { AppRoutingModule } from './app-routing.module';
import { DeviceListComponent } from './device-list/device-list.component';
import { AlgorithmFormComponent } from './algorithm-form/algorithm-form.component';
import { AddConfigComponent } from './add-config/add-config.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, DeviceDetailsComponent, DeviceListComponent, AlgorithmFormComponent, AddConfigComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
