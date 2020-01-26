const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res) => {

    User.find().then((result, error) => {
        res.send({
            'status': 200,
            'data': result
        });
    });
});

router.post('/', (req, res) => {

    const { name, email, age } = req.body

    if (!name || !email || !age) {
        res.json({
            status: 402,
            message: 'Fill all fields'
        })
    }

    new UserModel({ email, name, age }).save();

    res.json({
        status: 200,
        message: 'User Saved Successfully'
    })
});

router.delete('/', (req, res) => {

    const { id } = req.body

    if (!id) {
        res.json({
            status: 402,
            message: 'Fill all fields'
        })
    }

    UserModel.findById(id)
        .remove()
        .exec()
        .then((result) => {
            if (result.deletedCount) {
                res.json({
                    status: 200,
                    message: 'User Deleted Successfully'
                })
            }
            res.json({
                status: 200,
                message: 'User not found, deletion failed'
            })
        })
        .catch(() => {
            res.json({
                status: 200,
                message: 'User Deletion Failed'
            })
        });

});

module.exports = router;