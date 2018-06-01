const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());


const port = 3030;

massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection);
  })

app.get('/api/houses',controller.houses);

app.post('/api/house',controller.addHouse);

app.delete(`/api/house/:id`,controller.deleteHouse);

//   app.get('/api/product/:id',controller.getProduct);

//   app.put('/api/product/:id',controller.updateProduct);



app.listen( port, () => { console.log(`Server listening on port ${port}`); })