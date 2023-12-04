import { Request, Response } from 'express';

const handle404Error = (req: Request, res: Response) =>
	res.status(404).json({ error: 'Requested resource not found' });

export default handle404Error;
