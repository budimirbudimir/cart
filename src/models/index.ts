export interface CoverageProps {
  min: number;
  max: number;
  current: number;
}

export interface OfferProps {
  name: string;
  risk: number;
  coverage: CoverageProps;
  selected: boolean;
}

export type OffersProps = OfferProps[];

export interface OffersStateProps {
  list: OffersProps;
}

export interface GlobalStateProps {
  offers: OffersStateProps;
}

export interface ReduxActionProps {
  type: string;
  payload: any;
}
