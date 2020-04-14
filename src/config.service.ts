import { Injectable } from "@angular/core";
import CONFIG from "./config.json";
import { Device } from "./models/device";
import { Algorithm } from "./models/algorithm";
import { BehaviorSubject, Observable } from "rxjs";
import { find } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  private copy: Device[];
  private detected_devices = new BehaviorSubject<Device[]>([]);

  constructor() {}

  getCopy(): Device[] {
    return this.copy;
  }

  getDevices(): Observable<Device[]> {
    return this.detected_devices.asObservable();
  }

  setDevices(devices: Device[]): void {
    if (!this.copy) {
      this.copy = devices;
    }
    this.detected_devices.next(devices);
  }

  save(device_id: string, type: string, values): void {
    if (type === "algorithm") {
      let deviceToSave;
      deviceToSave = this.detected_devices.getValue().map(i => {
        console.log('i', i);
        if (i.device_id === device_id) {
          return {...i, algorithms: values};
        }
        return i;
      });
      console.log(deviceToSave);
      this.detected_devices.next(deviceToSave);
    }
  }

  static getAlgorithms(devices: Device[], device_id: string): Algorithm[] {
    const device: Device = devices.find((d: Device) => {
      return d.device_id === device_id;
    });
    return device.algorithms || [];
  }

  static getDeviceAlgorithm(
    devices: Device[],
    device_id: string,
    algorithm_id: string
  ): Algorithm {
    const algos = this.getAlgorithms(devices, device_id);
    return algos.find(a => {
      return a.algorithm_id[0].toString() === algorithm_id;
    });
  }
}
