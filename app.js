const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello movie recommendation service");
})

app.listen(3000, () => console.log('Movie recommendation service listening to port 3000'))