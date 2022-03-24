export interface IDealer {
  id?: number;
  name?: string | null;
}

export class Dealer implements IDealer {
  constructor(public id?: number, public name?: string | null) {}
}

export function getDealerIdentifier(dealer: IDealer): number | undefined {
  return dealer.id;
}
