let express = require('express');
let app = express();
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(8080);