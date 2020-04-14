import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";
import { Algorithm } from "../../models/algorithm";
import { ActivatedRoute } from "@angular/router";
import CONFIG from './../../config.json'; // TODO: remove before commiting

const ALGORITHMS = {
  0: "Scrypt",
  1: "SHA256",
  3: "X11",
  4: "X13",
  5: "Keccak",
  7: "Nist5",
  8: "NeoScrypt",
  11: "Qubit",
  12: "Quark",
  14: "Lyra2REv2",
  20: "DaggerHashimoto",
  21: "Decred",
  23: "Lbry",
  24: "Equihash",
  28: "Blake2s",
  32: "Lyra2Z",
  33: "X16R",
  35: "SHA256AsicBoost",
  36: "Zhash",
  38: "GrinCuckaroo29",
  39: "GrinCuckatoo31",
  40: "Lyra2REv3",
  42: "CrpytoNightR",
  43: "CuckoCycle",
  44: "GrinCuckarood29",
  45: "Beamv2",
  46: "X16Rv2",
  47: "RandomXmonero",
  48: "Eaglesong",
  49: "Cuckaroom",
  50: "GrinCuckatoo32",
  51: "Handshake"
};

@Component({
  selector: "app-device-details",
  templateUrl: "./device-details.component.html",
  styleUrls: ["./device-details.component.scss"]
})
export class DeviceDetailsComponent implements OnInit {
  json;
  selectedId;
  enabled;
  algos = ALGORITHMS;
  algorithms: Algorithm[] = []; //CONFIG.detected_devices[0].algorithms;

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.configService.getDevices().subscribe(data => {
      this.json = data;
      this.route.paramMap.subscribe(params => {
        this.algorithms = ConfigService.getAlgorithms(
          data,
          params.get("device_id")
        );
      
      });
    });
  }

  getSelected(event): void {
    this.selectedId = event;
    console.log('3',event);
  }
}
