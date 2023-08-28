import { CardService, UserService } from "../service";
import { dashboard } from "./dashboard";
import { register } from "./register";

const loginHTML = `<div style="height: 100vh" class="container d-flex justify-content-center align-items-center">
<form class="w-50">
 <h2>Login Form</h2>
 <div class="mb-3">
  <label for="phone" class="form-label">Phone number</label>
  <input type="tel" placeholder="Enter phone number" class="form-control" id="phone" />
 </div>
 <div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <input
   type="password"
   placeholder="Enter password"
   class="form-control"
   id="password"
  />
 </div>
 <div style="cursor: pointer" class="mb-3 text-secondary" id="navigate-register">
  Don't you have an account ?
 </div>
 <button type="submit" class="btn btn-primary">Login</button>
</form>
</div>`;

export const login = (cardService: CardService, userService: UserService) => {
	document.body.innerHTML = loginHTML;
    
	const form = document.querySelector("form") as HTMLFormElement;
	const navigateRegister = form.querySelector("#navigate-register") as HTMLDivElement;
	const phone = form.querySelector("#phone") as HTMLInputElement;
    const password = form.querySelector("#password") as HTMLInputElement;

    navigateRegister.onclick = () => register(cardService, userService);

	form.onsubmit = (e) => {
		e.preventDefault();

		const user = userService.login(phone.value, password.value);
		dashboard(user, cardService, userService);
	};
};
