import { Injectable } from "@angular/core";
import CONFIG from "./config.json";
import { Device } from "./models/device";
import { Algorithm } from "./models/algorithm";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  private detected_devices = new BehaviorSubject<Device[]>([]);

  constructor() {}

  getDevices(): Observable<Device[]> {
    return this.detected_devices.asObservable();
  }

  setDevices(devices: Device[]): void {
    this.detected_devices.next(devices);
  }

  static getAlgorithms(devices: Device[], device_id: string): Algorithm[] {
    const device: Device = devices.find((d: Device) => {
      return d.device_id === device_id;
    });
    return device.algorithms;
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
