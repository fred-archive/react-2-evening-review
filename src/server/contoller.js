const people = require('./data')

module.exports = {
    getAllPeople(req, res, next){
        res.status(200).send(people)
    }
}