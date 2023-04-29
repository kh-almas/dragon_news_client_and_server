const express = require('express');
const app = express();
// const port = process.ENV.PORT || 5000;
const port = 5000;

const cors = require('cors');



const categories = require('./data/categories.json');

app.use(cors())

app.get('/', (request, response) => {
    response.send('news is on the way');
});
app.get('/categories', (request, response) => {
    response.send(categories);
});

app.listen(port, () => {
    console.log(`dragonNews app listening on port ${port}`)
});