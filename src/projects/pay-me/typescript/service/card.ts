import { faker } from "@faker-js/faker";
import { Card } from "../entities";
import { CardRepository } from "../repository";
import { BANK_NAME, CARD_TYPE } from "../types";

export class CardService extends CardRepository {
  add(
    cardNumber: string,
    expiry: string,
    cardType: CARD_TYPE,
    bankName: BANK_NAME
  ) {
    const balance = Number(faker.finance.amount());
    const card = new Card(
      cardNumber,
      faker.finance.pin(),
      expiry,
      cardType,
      balance,
      faker.string.uuid(),
      bankName
    );
    this.create(card);
  }
}
