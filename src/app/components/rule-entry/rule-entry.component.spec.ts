import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { RuleEntryComponent } from './rule-entry.component';

describe('RuleEntryComponent', () => {
  let component: TestRuleEntryComponent;
  let fixture: ComponentFixture<TestRuleEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RuleEntryComponent,
        TestRuleEntryComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRuleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: `app-test-rule-entry`,
  template: `<app-rule-entry [index]="1" [ruleForm]="ruleForm"></app-rule-entry>`
})
class TestRuleEntryComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  public ruleForm: FormGroup = this.formBuilder.group({
    location: ['']
  });

}
