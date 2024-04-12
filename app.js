import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routers/router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});