import { User } from "./entities";
import { register } from "./pages";
import { CardService, UserService } from "./service";

const cardService = new CardService();
const userService = new UserService();

function init() {
  register(cardService, userService);
}

init();
