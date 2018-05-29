const router = require('express').Router();

const users = require('../db_services/user_services');



router.post('/login', (req, res) => {

    /*users.getUserInfo(req.body.login, req.body.password)

     .then((user) => {

     user ? res.status(200).send(user) : res.status(404).send('User not found')

     })

     .catch(err => res.status(404).send(err))*/

});



module.exports = router;