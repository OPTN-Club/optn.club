const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.set('x-powered-by', false);
app.use(compression());
app.use('/', express.static(path.join(__dirname, '/docs')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/docs/index.html'))
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.info(`Express server listening on port ${port}.`));
