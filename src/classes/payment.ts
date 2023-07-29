import { AbstractPayment } from './Abstractpayment.js';

export class Payment extends AbstractPayment {
  constructor(
    recipient: string,
    details: string,
    amount: number
  ) {
    super(recipient, details, amount);
  }

  format() {
    return `${this.recipient} is owed Ksh${this.amount} for ${this.details}`;
  }
}