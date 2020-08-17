const express = require('express');

const app = express();

app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/index.html')
})


app.listen(000, () => console.log('Server up n running on port 3000'))