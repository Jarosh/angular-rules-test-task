import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { IRule, RuleLocation, RuleMatching } from '../../interfaces/IRule';
import { RulesService } from '../../services/rules.service';

const AUTOSAVE_TIMEOUT_MS = 2000;

@Component({
  selector: 'app-rules-group',
  templateUrl: './rules-group.component.html',
  styleUrls: ['./rules-group.component.scss']
})
export class RulesGroupComponent implements OnInit {
  @Input() public blacklisted: boolean = false;
  @Input() public title: string;
  @Input() public subtitle: string;

  public rulesForm: FormArray = new FormArray([]);

  constructor(
    private formBuilder: FormBuilder,
    private rulesService: RulesService
  ) {
  }

  public ngOnInit(): void {
    this.appendRule();
    this.rulesForm.valueChanges
      .pipe(
        distinctUntilChanged((prev: any, curr: any) => JSON.stringify(prev) === JSON.stringify(curr)), // too lazy to install lodash :)
        debounceTime(AUTOSAVE_TIMEOUT_MS)
      )
      .subscribe((val: IRule[]) => {
        if (this.rulesForm.valid) {
          this.rulesService.saveRuleSet(val, this.blacklisted);  
        }
      });
  }

  public appendRule(): void {
    this.rulesForm.push(this.formBuilder.group({
      location: [RuleLocation.home]
    }));
  }

  public removeRule(index: number): void {
    this.rulesForm.removeAt(index);
  }

}
