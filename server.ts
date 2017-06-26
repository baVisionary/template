import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import questions from './app/backend/api/questions';

const app  = express();
const port = 8042;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./app/frontend/'));

app.use('/app/backend/api/questions', questions);

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname,'/app/frontend/index.html'));
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

export default app;