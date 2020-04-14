import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Algorithm } from "../../models/algorithm";
import { map } from "rxjs/operators";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "app-algorithm-form",
  templateUrl: "./algorithm-form.component.html",
  styleUrls: ["./algorithm-form.component.scss"]
})
export class AlgorithmFormComponent implements OnInit {
  @Input() algorithm: Algorithm;
  @Output() isSelectedEvent = new EventEmitter<{}>();
  form: FormGroup;
  isSelected: boolean = false;

  constructor(private fb: FormBuilder) {}

  buildForm(power) {
    const b = power.map((val, i) => {
      return this.fb.group({
        mode: val.mode,
        power_use: val.power_use,
        extra_parameters: val.extra_parameters,
        tdp: val.tdp,
        core_clocks: val.core_clocks,
        memory_clocks: val.memory_clocks,
        speed: this.fb.group({
          hash_rates: val.speed.hash_rates,
          measured_type: val.speed.measured_type,
          saved_at: val.speed.saved_at
        })
      });
    });
    return b;
  }

  ngOnInit() {
    const power = this.algorithm.power;
    const {miner, enabled} = this.algorithm;

    this.form = this.fb.group({
      enabled: enabled,
      miner: miner,
      power: this.fb.array(this.buildForm(power))
    });

    this.form.valueChanges.subscribe(console.log);
  }

  get powerForm() {
    return this.form.get("power") as FormArray;
  }

  submit(): void {
    console.log(this.form.get("power").value);
  }

  select(): void {
    this.isSelected = !this.isSelected;
    const id = this.algorithm.miner + this.algorithm.algorithm_id[0];
    this.isSelectedEvent.emit(id);
  }
}
