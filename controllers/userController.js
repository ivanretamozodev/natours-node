const fs = require('fs');

const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/users.json`, 'utf-8')
);

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: users.lenght,
        data: {
            users,
        },
    });
};
exports.createUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: users.lenght,
        data: {
            users,
        },
    });
};
exports.getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: users.lenght,
        data: {
            users,
        },
    });
};
exports.updateUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: users.lenght,
        data: {
            users,
        },
    });
};
exports.deleteUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: users.lenght,
        data: {
            users,
        },
    });
};
