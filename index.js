const express = require('express');
const sushi = require('@sushiswap/sushi-data');
const Datastore = require('nedb');


const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({
    limit: '1mb'
}));

const database = new Datastore('database.db');
database.loadDatabase();

let pair_addr;

app.get('/api', (request, response) => {
    console.log(request)
    database.find({token: pair_addr}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

app.post('/api', (request, response) => {
    const data = request.body;
    //console.log(data.token);
    const timestamp = Date.now();
    const token = data.token;
    pair_addr = token;
    data.timestamp = timestamp;
    //console.log(timestamp);
    sushi.exchange.pair({pair_address: token}).then(async function (value) {
        const name0 = value.token0.name;
        const name1 = value.token1.name;
        const price = value.token0.derivedETH / value.token1.derivedETH;

        //console.log(value);
        const coinData = {
            token,
            timestamp,
            name0,
            name1,
            price

        };
        database.insert(coinData);
        //console.log(database);
        const json = response.json(data);
    });




});