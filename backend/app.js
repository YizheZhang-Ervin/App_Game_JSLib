// import libs
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require('./routes/users');
const ejs = require('ejs');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
app.listen(port, () => console.log(`start at ${port}`));

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

// templates
app.set("views",path.join(__dirname,"../","/frontend"));
app.set('view engine', 'ejs')
app.engine('html',ejs.__express)
app.set('view engine','html')

// middlewares
app.use('/', usersRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"../", '/frontend')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
});
app.use(cors());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;