import { PORT } from './constants';
import app from './app';

app.listen(PORT, () => console.log('Server listening on port', PORT));
