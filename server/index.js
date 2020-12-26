// Express
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// File upload
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Controllers
const PostsController = require('./controllers/PostsController');
const ProfileController = require('./controllers/ProfileController');
require('dotenv').config();

// Database
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ posts: [], user: { name: "John Doe", profilePicture: "/public/profile.svg" } }).write();
app.db = db;

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
app.get('/profile/username', ProfileController.getUserName);
// app.post('/profile/username', ProfileController.setUsername);
app.get('/profile', ProfileController.getProfile);
app.post('/profile', upload.single('profilePicture'), ProfileController.setProfile);

app.use('/public', express.static(`${__dirname}/public`));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});
