'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var userRouter = require('./routes/users/user');
<<<<<<< HEAD
var scoreRouter=require('./routes/scores/score');
var gameRouter=require('./routes/Games/game');
var gameSessionRoutes=require('./routes/GameSession/gameSession');
var friendRequestRoutes=require('./routes/friendRequests/friendRequest');
var groupRoutes=require('./routes/Group/group');
=======
var scoreRouter = require('./routes/scores/score');
var gameRouter = require('./routes/games/game');

>>>>>>> bf2c6146269cc4bf56b9d6cd80a754ecdc245b0b
require('./db/mongoose'); //Get db Connection

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
app.use(userRouter);
app.use(scoreRouter);
app.use(gameRouter);
app.use(gameSessionRoutes);
app.use(friendRequestRoutes);
app.use(groupRoutes);



=======
app.use(userRouter)
app.use(scoreRouter)
app.use(gameRouter)
>>>>>>> bf2c6146269cc4bf56b9d6cd80a754ecdc245b0b



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
