import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConfigService } from "../../config.service";

@Component({
  selector: "app-algorithm-form",
  templateUrl: "./algorithm-form.component.html",
  styleUrls: ["./algorithm-form.component.css"]
})
export class AlgorithmFormComponent implements OnInit {
  @Input() algorithm;

  constructor(
    private configService: ConfigService
  ) {}

  ngOnInit() {
    
    
  }

  json(){
    return JSON.stringify(this.algorithm, null, 2);
  }
}
