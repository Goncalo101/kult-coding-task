class ProfileController {
    static async getUserName(req, res) {
        let username = req.app.db.get('user.name').value();
        return res.status(200).json(username);
    }

    static async setUsername(req, res) {
        req.app.db.set('user.name', req.body.username).write();
        return res.status(200).json({status: "success"});
    }

    static async getProfile(req, res) {

    }
    
    static async setProfile(req, res) {
        if (req.body.username)
            req.app.db.set('user.name', req.body.username).write();
        if (req.file)
            req.app.db.set('user.profilePicture', "/public/" + req.file.originalname).write();
        return res.status(401);
    }
}

module.exports = ProfileController;
