import { Component, OnInit } from "@angular/core";
import { Device } from "../../models/device";
import { ConfigService } from "../../config.service";

@Component({
  selector: "app-device-list",
  templateUrl: "./device-list.component.html",
  styleUrls: ["./device-list.component.css"]
})
export class DeviceListComponent implements OnInit {
  devices: Device[] = [];
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getDevices().subscribe(data => {
      console.log(data);
      this.devices = data;
    });
  }
}
