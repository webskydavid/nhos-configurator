import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Algorithm } from "../../models/algorithm";
import { map } from "rxjs/operators";

@Component({
  selector: "app-algorithm-form",
  templateUrl: "./algorithm-form.component.html",
  styleUrls: ["./algorithm-form.component.scss"]
})
export class AlgorithmFormComponent {
  @Input() algorithm: Algorithm;
  @Output() isSelectedEvent = new EventEmitter<{}>();
  isSelected: boolean = false;

  json() {
    return JSON.stringify(this.algorithm, null, 2);
  }

  select(): void {
    this.isSelected = !this.isSelected;
    const id = this.algorithm.miner + this.algorithm.algorithm_id[0];
    this.isSelectedEvent.emit(id);
  }
}
