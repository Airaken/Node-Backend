require('./config/config');

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(require('./router/index'));
app.listen(process.env.PORT, () => {
    console.log('Listen on port ', process.env.PORT);
});