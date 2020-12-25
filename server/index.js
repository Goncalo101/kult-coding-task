const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PostsController = require('./controllers/PostsController');
require('dotenv').config();

const port = process.env.port || 3001;

app.use(bodyParser.urlencoded({  extended: true }));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.app_url);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, X-XSRF-TOKEN');
    next();
});  

app.get('/posts', PostsController.list);
app.post('/posts', PostsController.create);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});