import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";
import { Algorithm } from "../../models/algorithm";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-device-details",
  templateUrl: "./device-details.component.html",
  styleUrls: ["./device-details.component.css"]
})
export class DeviceDetailsComponent implements OnInit {
  algorithms: Algorithm[] = [];
  selectedAlgorithm: Algorithm;

  constructor(private configService: ConfigService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.configService.getDevices().subscribe(data => {
      this.route.paramMap.subscribe(params => {
        this.algorithms = ConfigService.getAlgorithms(data, params.get('device_id'));
      });
      
    });
  }

  selectAlgorithm(algorithm: Algorithm): void {
    this.selectedAlgorithm = algorithm;
  }
}
