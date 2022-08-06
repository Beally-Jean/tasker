const {User} = require('../models/models')


class UserController {
    async register(req, res) {
        try{
            const {login, password} = req.body
            const user = await User.create({login, password})
            return res.json(user)
        } catch(e) {
            console.log(e.message)
        }
    }
}

module.exports = new UserController()