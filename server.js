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

// Telemetry API test, returns documentation as [[name(str), byte length(int), data type(str), description(str), optional calculations(str) OR null]]
app.get('/api/v1/telemetry', (req,res) =>
  res.sendFile(path.join(__dirname, '/telemetry_docs.json'))
);

app.use(spaMiddleware);
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/docs/index.html'))
// );

const port = process.env.PORT || 8080;
app.listen(port, () => console.info(`Express server listening on port ${port}.`));
