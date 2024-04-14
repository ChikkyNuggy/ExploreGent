import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routers/router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const hbs = exphbs.create({
  helpers: {
      json: function (context) {
          return JSON.stringify(context);
      }
  }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});