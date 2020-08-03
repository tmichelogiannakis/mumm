export interface Tier {
  code: string;
  name: string;
  order: number;
  type: string;
  maximum_selections: number;
  shortage: boolean;
  dependent_options: string[];
  free_options: number;
  options: TierOption[];
}

export interface TierOption {
  code: string;
  name: string;
  price: number;
  selected: boolean;
  shortage: boolean;
  extra: any | null;
  dependencies: {
    code: string;
    price: number;
    enabled: boolean;
  }[];
}
