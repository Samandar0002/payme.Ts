import { faker } from "@faker-js/faker";
import { BANK_NAME, CARD_TYPE } from "../types";

export const userList: any[] = [];
export const cardsList: any[] = [];
const cardType: CARD_TYPE[] = ["HUMO", "UZCARD", "VISA", "MASTERCARD"];
const bankName: BANK_NAME[] = ["TBC", "NBU", "GRANT", "SQB"];

export function fakelist(amount: number) {
  for (let i = 0; i < amount; i++) {
    const fakerFirstName = faker.person.firstName();
    const fakerLastName = faker.person.lastName();
    const fakerPassword = faker.internet.password();
    const fakeCard = faker.finance.creditCardNumber();
    const typeIdx: number = Math.floor(Math.random() * 4);
    const fakeDate: string = `${fakeDateFunc()}/${fakeDateFunc(23, 33)}`;
    const fakeCardTypeIdx: string = cardType[typeIdx];
    const fakeBankName: string = bankName[typeIdx];



    userList.push([fakerFirstName, fakerLastName, fakerPassword]);
    cardsList.push([fakeCard, fakeDate, fakeCardTypeIdx, fakeBankName]);
  }
}

export function fakeDateFunc(minDate: number = 12, maxDate: number = 1) {
  const fakeDate: number =
    Math.floor(Math.random() * (minDate - maxDate)) + maxDate;

  return fakeDate < 10 ? '0' + fakeDate : fakeDate;
}

// fakelist(10);
