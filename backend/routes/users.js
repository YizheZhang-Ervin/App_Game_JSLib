var express = require('express');
var router = express.Router();
var userQuery = require('../models/usersModel')

/* GET users listing. */
router.get('/api/users', function(req, res, next) {
    let sql = "select * from eggroup.users";
    userQuery.queryAll(sql,function(err,rows,fields){
        console.log(rows);
    });
});
router.get('/game1', function(req, res, next) {
    res.render("game.html");
});

module.exports = router;
