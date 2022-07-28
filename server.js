const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

const staticMiddleware = express.static(path.join(__dirname, '/docs'));
const spaMiddleware = (req, res) => {
  res.sendFile(path.join(__dirname, '/docs/index.html'));
}

app.set('x-powered-by', false);
app.use(compression());
app.use('/', staticMiddleware);
app.use('/optn.club', staticMiddleware);
app.use(spaMiddleware);
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/docs/index.html'))
// );

const port = process.env.PORT || 8080;
app.listen(port, () => console.info(`Express server listening on port ${port}.`));
