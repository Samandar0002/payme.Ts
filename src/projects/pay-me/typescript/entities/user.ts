export class User {
	private id: string;
	private isBlocked: boolean;
	constructor(
		public firstName: string,
		public lastName: string,
		public phoneNumber: string,
		private password: string
	) {}

	setId(id: string) {
		this.id = id;
	}

	getId() {
		return this.id;
	}
	setPassword(password: string) {
		this.password = password;
	}

	getPassword() {
		return this.password;
	}
}
