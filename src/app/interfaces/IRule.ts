export enum RuleMatching {
  contains = 'contains',
  exact = 'exact'
}

export const RuleMatchingNames: Readonly<{ [key: string]: string }> = Object.freeze({
  [RuleMatching.contains]: 'Contains',
  [RuleMatching.exact]: 'Exact match'
});


export enum RuleLocation {
  home = 'home',
  product = 'product',
  custom = 'custom'
}

export const RuleLocationNames: Readonly<{ [key: string]: string }> = Object.freeze({
  [RuleLocation.home]: 'Home',
  [RuleLocation.product]: 'Product',
  [RuleLocation.custom]: 'Custom',
});

export interface IRule {
  location: RuleLocation;
  matching?: RuleMatching;
  pattern?: string;
}
