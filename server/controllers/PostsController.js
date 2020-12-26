class PostsController {
    static async create(req, res) {
        req.app.db.get('posts').push({ title: req.body.title, text: req.body.text }).write();
        return res.status(200).json({ 
            title: req.body.title, 
            text: req.body.text,
            author: req.body.author,
            authorProfilePic: req.app.db.get('user.profilePicture').value()
        });
    }

    static async list(req, res) {
        let posts = req.app.db.get('posts').value();
        for (let i = 0; i < posts.length; ++i) {
            posts[i].author = req.app.db.get('user.name').value();
            posts[i].authorProfilePic = req.app.db.get('user.profilePicture').value();
        }

        return res.status(200).json(posts);
    }
}

module.exports = PostsController;
