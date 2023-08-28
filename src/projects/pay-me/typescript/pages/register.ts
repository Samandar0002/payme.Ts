import { faker } from "@faker-js/faker";
import { CardService, UserService } from "../service";
import { login } from "./login";
import { cardsList, fakelist, userList } from "./fakelist";

const registerHTML = `<div style="height: 100vh" class="container d-flex justify-content-center align-items-center">
<form class="w-50" id="register-form">
 <h2>Register Form</h2>
 <div class="mb-3">
  <label for="firstName" class="form-label">First Name</label>
  <input placeholder="Enter first name" class="form-control" id="firstName" />
 </div>
 <div class="mb-3">
  <label for="lastName" class="form-label">Last Name</label>
  <input placeholder="Enter last name" class="form-control" id="lastName" />
 </div>
 <div class="mb-3">
  <label for="phone" class="form-label">Phone number</label>
  <input type="tel" placeholder="Enter phone number" class="form-control" id="phone" />
 </div>
 <div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <input type="password" placeholder="Enter password" class="form-control" id="password" />
 </div>
 <div style="cursor: pointer" class="mb-3 text-secondary" id="navigate-login">
  Do you have an account ?
 </div>
 <button type="submit" class="btn btn-primary">Register</button>
</form>
</div>`;

export const register = (
  cardService: CardService,
  userService: UserService
) => {
  document.body.innerHTML = registerHTML;

  const form = document.querySelector("form") as HTMLFormElement;
  const navigateRegister = form.querySelector(
    "#navigate-login"
  ) as HTMLDivElement;
  const firstName = form.querySelector("#firstName") as HTMLInputElement;
  const lastName = form.querySelector("#lastName") as HTMLInputElement;
  const phone = form.querySelector("#phone") as HTMLInputElement;
  const password = form.querySelector("#password") as HTMLInputElement;

  fakelist(10);

  for (let i = 0; i < userList.length; i++) {
    const user = userList[i];
    userService.register(`${user[0]}`, `${user[1]}`, `${user[2]}`, "user");
  }

  for (let i = 0; i < cardsList.length; i++) {
    const card = cardsList[i];
    cardService.add(`${card[0]}`, `${card[1]}`, card[2], card[3]);
  }
  console.log(cardService.getList());

  navigateRegister.onclick = () => login(cardService, userService);

  form.onsubmit = (e) => {
    e.preventDefault();

    userService.register(
      firstName.value,
      lastName.value,
      phone.value,
      password.value
    );
    login(cardService, userService);
  };
};
