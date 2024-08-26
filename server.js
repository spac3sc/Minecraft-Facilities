const express = require('express');
const path = require('path');

const app = express();

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, '/public')))
=======
app.use(express.static(path.join(__dirname, 'public')))
>>>>>>> 4a128102f819dc5dae638c14e657e8f666891dd0

app.use((req, res) => {
    res.status(404);
    res.send('<h1>WRONG LINK DIPSHT</h1>');
})

app.listen(8080, () => {
    console.log("App listening on port 8080")
})