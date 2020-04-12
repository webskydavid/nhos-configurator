import {Power} from './power';

export interface Algorithm {
  miner: string;
  algorithm_id: number[];
  enabled: boolean;
  power: Power[];
}