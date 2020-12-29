import dotenv from 'dotenv';

import { bootstrap } from './bootstrap';

dotenv.config();

const app = bootstrap();

const port = process.env.PORT ?? 3000;

app.listen(port, () => {});