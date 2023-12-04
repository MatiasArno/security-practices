import fs from 'node:fs';
import { getSalt, hashPassword, compareHashes } from '../utils/password-hasher';
import users from './database/users.json';

class User {
	username!: string;
	password!: string;

	public static async getAll() {
		const allUsers = users as any;
		return allUsers;
	}

	public static async getByUsername(username: string) {
		const users = await this.getAll();
		return users.find((user: any) => user.username == username);
	}

	public static async saveNew(username: string, password: string) {
		const users = await this.getAll();

		const salt = getSalt();
		const hashedPassword = hashPassword(password, salt);
		const saltAndHash = `${salt}:${hashedPassword.toString('hex')}`;

		users.push({ username, password: saltAndHash });

		console.log(users);

		fs.writeFileSync(
			'./src/models/database/users.json',
			JSON.stringify(users)
		);

		return { message: `User ${username} saved successfully!` };
	}

	public static async login(username: string, password: string) {
		const userFound = await User.getByUsername(username);
		if (!userFound) return { error: 'User not found' };

		const [storedSalt, storedHash] = userFound.password.split(':');
		const hashedPassword = hashPassword(password, storedSalt);

		const isLogged = compareHashes(storedHash, hashedPassword);
		if (!isLogged) return { error: 'Wrong password' };

		return { message: 'User logged successfully!' };
	}
}

export default User;
