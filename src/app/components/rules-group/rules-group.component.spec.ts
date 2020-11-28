import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RulesGroupComponent } from './rules-group.component';
import { RuleEntryComponent } from '../rule-entry/rule-entry.component';
import { RulesService } from '../../services/rules.service';

describe('RulesGroupComponent', () => {
  let component: RulesGroupComponent;
  let fixture: ComponentFixture<RulesGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RulesGroupComponent,
        RuleEntryComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        RulesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
