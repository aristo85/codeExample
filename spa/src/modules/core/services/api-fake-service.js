const Money = require("js-money");

export default class ApiFakeService {
  constructor(token) {
    this.token = token;
  }

  async getWalletList() {
    return [
      {
        money: new Money(10000, Money.RUB),
        type: "fiat",
        code: "RUB1",
        uid: "1",
      },
      {
        money: new Money(15000, Money.EUR),
        type: "fiat",
        code: "EUR2",
        uid: "2",
      },
      {
        money: new Money(5000, Money.USD),
        type: "fiat",
        code: "USD3",
        uid: "3",
      },
      {
        money: new Money(900000, Money.BTC),
        type: "crypto",
        code: "BTC4",
        uid: "4",
      },
      {
        money: new Money(7000000, Money.ETH),
        type: "crypto",
        code: "ETH5",
        uid: "5",
      },
    ];
  }

  async getProfile() {
    return {
      user: { is_company: false, email: "blabla@gmail.com" },
      kyc: { review_result: "completed", verified: true },
    };
  }
}
