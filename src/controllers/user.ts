import { Request, Response } from 'express';
import User from '../models/user';

class UserController {
	public static async saveNew(req: Request, res: Response) {
		const { username, password } = req.body;

		const response = await User.saveNew(username, password);

		res.status(201).json(response);
	}

	public static async login(req: Request, res: Response) {
		const { username, password } = req.body;

		const response = await User.login(username, password);
		if (response.error) return res.status(400).json(response);

		res.status(201).json({ message: 'User logged successfully!' });
	}

	public static async getAll(req: Request, res: Response) {
		const allUsers = await User.getAll();
		res.json(allUsers);
	}
}

export default UserController;
