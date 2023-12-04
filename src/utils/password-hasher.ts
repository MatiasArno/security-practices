import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto';
import { PEPPER } from '../constants';

const getSalt = () => randomBytes(18).toString('hex');

const compareHashes = (storedHashedPassword: string, incomingHash: Buffer) => {
	const storedHashedPasswordBuffer = Buffer.from(storedHashedPassword, 'hex');

	// Used timingSafeEqual to mitigate timing attacks
	const match = timingSafeEqual(incomingHash, storedHashedPasswordBuffer);

	return match;
};

const hashPassword = (password: string, salt: string) =>
	scryptSync(password, salt + PEPPER, 45);

export { getSalt, hashPassword, compareHashes };
