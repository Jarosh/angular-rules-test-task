import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IRule } from '../interfaces/IRule';

@Injectable()
export class RulesService {

  saveRuleSet(rules: IRule[], blacklisted: boolean = false): void {
    // do something more meaningful IRL
    console.log(`${blacklisted ? 'Exclusion' : 'Inclusion'} rules:`, rules);
  }

}
