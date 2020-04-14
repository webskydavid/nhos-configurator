import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import CONFIG from './../../config.json';

@Component({
  selector: 'app-add-config',
  templateUrl: './add-config.component.html',
  styleUrls: ['./add-config.component.scss']
})
export class AddConfigComponent {
  config = JSON.stringify(CONFIG);
  constructor(private configService: ConfigService) { }

  submit(): void{
    const data = JSON.parse(this.config);
    this.configService.setDevices(data.detected_devices);
    this.config = '';
  }

}