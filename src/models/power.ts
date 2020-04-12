import { Speed } from "./speed";


export interface Power {
  mode: string;
  speed: Speed;
  power_use: number;
  extra_parameters: any[];
  tdp: string;
  core_clocks: string;
  memory_clocks: string;
}