const express = require('express')
const app = express()
const port = 9000
const path = require('path');
const morgan = require('morgan');

//See all incoming requests
app.use(morgan('dev'));

//serve files from dist
app.use(express.static(path.join(__dirname, '../client/dist')));

//notification on open server
app.listen(port, () => console.log(`listening on port ${port}!`));