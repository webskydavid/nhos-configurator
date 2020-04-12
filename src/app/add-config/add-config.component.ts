import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import CONFIG from './../../config.json';

@Component({
  selector: 'app-add-config',
  templateUrl: './add-config.component.html',
  styleUrls: ['./add-config.component.css']
})
export class AddConfigComponent {
  config = JSON.stringify(CONFIG);
  constructor(private configService: ConfigService) { }

  submit(): void{
    this.configService.setDevices(this.config);
  }

}