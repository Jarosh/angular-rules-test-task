import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RuleLocation, RuleLocationNames, RuleMatching, RuleMatchingNames } from '../../interfaces/IRule';

@Component({
  selector: 'app-rule-entry',
  templateUrl: './rule-entry.component.html',
  styleUrls: ['./rule-entry.component.scss']
})
export class RuleEntryComponent {
  @Input() public index: number;
  @Input() public ruleForm: FormGroup;

  @Output() public onRemoveRule: EventEmitter<number> = new EventEmitter<number>();

  public RuleLocation: typeof RuleLocation = RuleLocation;
  public RuleMatching: typeof RuleMatching = RuleMatching;
  public RuleLocationNames: { [key: string]: string } = RuleLocationNames;
  public RuleMatchingNames: { [key: string]: string } = RuleMatchingNames;
  public keepEnumSorting: () => number = () => 0;

  public changeLocation(location: RuleLocation): void {
    if (location === RuleLocation.custom) {
      this.ruleForm.addControl('matching', new FormControl(RuleMatching.contains));
      this.ruleForm.addControl('pattern', new FormControl('', Validators.required));
    } else {
      this.ruleForm.removeControl('matching');
      this.ruleForm.removeControl('pattern');
    }
  }

  public removeRule(): void {
    this.onRemoveRule.emit(this.index);
  }

}
