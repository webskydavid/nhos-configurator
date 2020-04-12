import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { Algorithm } from '../../models/algorithm';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  algorithms: Algorithm[] = [];
  selectedAlgorithm: Algorithm;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.algorithms = this.configService.getAlgorithms('NVD-12');
  }

  selectAlgorithm(algorithm: Algorithm): void{
    this.selectedAlgorithm = algorithm;
  }

}