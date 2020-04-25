const router = require("express").Router();
const restricted = require("../auth/restricted-middleware")

const Users = require("./users-model");

router.get("/", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ message: "Error retrieving users", err })
        })
})

module.exports = router;