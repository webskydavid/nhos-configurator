import { Algorithm} from './algorithm';

export interface Device {
  name: string;
  device_id: string;
  enabled: boolean;
  active: boolean;
  selected_power_mode: string;
  algorithms: Algorithm[];
}