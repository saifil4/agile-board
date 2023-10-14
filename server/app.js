const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const workSpaceRoute = require('./routes/workspace-route');


const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api/workspace', workSpaceRoute);


app.listen(8080, () => {
    console.log('server started');
});