import { faker } from "@faker-js/faker";
import { Card } from "../entities";

export class CardRepository {
  private cardList: Array<Card> = []; // HM_0003

  public clone(card: Card): Card {
    return Object.assign(Object.create(Card.prototype), card);
  }

  public create(...cards: Card[]) {
    for (const card of cards) {
      if (this.isExist(card.number)) {
        throw new Error(`Card already exists (${card.number})`);
      }

      card.setId(faker.string.uuid());
      this.cardList.push(this.clone(card));
    }
  }

  delete(cardId: string) {
    const currentCard = this.getById(cardId);
    this.cardList = this.cardList.filter((card) => card !== currentCard);
  }

  private isExist(cardNumber: string): boolean {
    return !!this.cardList.find((card) => card.number === cardNumber);
  }

  getList() {
    return this.cardList;
  }

  getById(cardId: string) {
    const card = this.cardList.find((card) => card.getId() === cardId);
    if (!card) {
      throw new Error(`Card not found (${cardId})`);
    }

    return card;
  }

  update(card: Card) {
    const cardIdx = this.cardList.findIndex((c) => c.getId() === card.getId());

    if (cardIdx === -1) throw new Error(`Card not found (${card.getId()})`);

    this.cardList.splice(cardIdx, 1, card);
  }

  getListByOwnerId(ownerId: string) {
    const cards: Card[] = this.cardList.filter(
      (card) => card.getOwnerId() === ownerId
    );
    if (!cards.length)
      throw new Error(`No cards found with owner (${ownerId})`);

    return cards;
  }

  getCardNumber(cardNumber: string) {
    const cards: Card[] = this.cardList.filter(
      (card) => card.number === cardNumber
    );

    if (!cards.length)
      throw new Error(`No cards found with number (${cardNumber})`);

    return cards;
  }
}
