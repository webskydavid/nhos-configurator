import { Injectable } from "@angular/core";
import CONFIG from "./config.json";
import { Device } from "./models/device";
import { Algorithm } from "./models/algorithm";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  detected_devices: Device[];

  constructor() {
    this.detected_devices = CONFIG.detected_devices;
  }

  getDevices(): Device[] {
    return this.detected_devices;
  }

  getAlgorithms(device_id: string): Algorithm[] {
    const device: Device = this.detected_devices.find(
      (d: Device) => d.device_id === device_id
    );

    return device.algorithms;
  }

  getDeviceAlgorithm(device_id: string, algorithm_id: string): Algorithm {
    const algos = this.getAlgorithms(device_id);
    return algos.find(a => {
      console.log(a.algorithm_id[0].toString(), algorithm_id);
      return a.algorithm_id[0].toString() === algorithm_id;
    });
  }
}
