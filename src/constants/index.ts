const PORT = Number(process.env.PORT) || 63001;

const ENVIRONMENT = process.env.ENVIRONMENT || 'unknown';

const PEPPER = process.env.PEPPER || 'unknown';

const isDevelopmentEnvironment = () => ENVIRONMENT === 'development';

export { PORT, ENVIRONMENT, PEPPER, isDevelopmentEnvironment };
