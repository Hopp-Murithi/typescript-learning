export class Invoice {
    constructor(
      readonly client: string,
      private details: string,
      public amount: number
    ) {}
  
    format() {
      return `${this.client} owes Ksh${this.amount} for ${this.details}`;
    }
  }
