import { NextFunction, Request, Response } from 'express';

const validateUserCredentials = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { username, password } = req.body;

	if (!username || !password)
		return res
			.status(400)
			.json({ error: 'Username and password are required' });

	next();
};

export default validateUserCredentials;
