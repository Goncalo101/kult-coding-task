const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ posts: [] }).write();

class PostsController {
    static async create(req, res) {
        db.get('posts').push({ title: req.body.title, text: req.body.text }).write();
        return res.status(200).json({ title: req.body.title, text: req.body.text });
    }

    static async list(req, res) {
        let posts = db.get('posts').value();
        return res.status(200).json(posts);
    }
}

module.exports = PostsController;