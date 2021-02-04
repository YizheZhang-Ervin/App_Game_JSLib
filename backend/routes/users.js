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
router.get('/:game', function(req, res, next) {
    let gameNo = req.params.game;
    let css1 = `<link rel="stylesheet" href='./static/${gameNo}/TemplateData/style.css'>`;  
    let js1 = `<script src="./static/${gameNo}/TemplateData/UnityProgress.js"></script>`;    
    let js2 = `<script src="./static/${gameNo}/Build/UnityLoader.js"></script>`    
    let js3 = `<script>
                var unityInstance = UnityLoader.instantiate("unityContainer", "./static/${gameNo}/Build/Build.json", {onProgress: UnityProgress});
                </script>`
    res.render("game.ejs",{css1:css1,js1:js1,js2:js2,js3:js3});
});

module.exports = router;
