const {User} = require('../models/models')


class UserController {
    async register(req, res) {
        try{
            const {login, password} = req.body
            const user = await User.create({login, password})
            return res.json(user)
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }
    async login(req, res) {
        try{
            const {login, password} = req.body
            const user = await User.findOne({where: {login, password}})
            return res.json({user_id: user.id})
        } catch(e) {
            return res.status(400).json({errors: [{error: e.message}]})
        }
    }
}

module.exports = new UserController()