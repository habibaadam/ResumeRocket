const express = require('express');
const api = require('./routes/api.js');
const datab = require('./utils/db.js');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/', api);

app.listen(port, () => {
  console.log(`Server connected and running on port ${port}`)
});
