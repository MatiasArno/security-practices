import { Request, Response } from 'express';
import pkg from '../../package.json';

class ServerController {
	public static async getStatus(req: Request, res: Response) {
		const { name, author, version, description } = pkg;

		res.json({
			name,
			description,
			version,
			author,
			database: 'JSON format database for testing and demonstration',
		});
	}
}

export default ServerController;
