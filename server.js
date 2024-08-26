const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.status(404);
    res.send('<h1>WRONG LINK DIPSHT</h1>');
})

app.listen(8080, () => {
    console.log("App listening on port 8080")
})