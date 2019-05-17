const express = require('express');
const bodyparser = require('body-parser');
const port = 3005
app = express();
app.use(bodyparser.json());
app.use(express.static);

app.listen(port, ()=>{console.log(`proxy server listening on port ${port}`)});


