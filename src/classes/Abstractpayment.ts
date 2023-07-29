import { HasFormatter } from "../interfaces/hasFormatter.js";

export abstract class AbstractPayment implements HasFormatter {
  constructor(
    readonly recipient: string,
    protected details: string,
    public amount: number
  ) {}

  abstract format(): string;
}
