var router = require('express').Router();
var request = require('request');
var botToken = require('../config.json').botToken;

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/', function (req, res) {
    request.post('https://slack.com/api/chat.postMessage', {
        form: {
            token: botToken,
            as_user: false,
            username: req.body.username,
            channel: req.body.channel,
            text: req.body.message
        }
    }, function (err, response, body) {
        res.end();
    });
});

module.exports = router;

function sanitiseText(text) {
    text.replace(/&/g , '&amp;');
    text.replace(/</g , '&lt;');
    text.replace(/>/g , '&gt;');
}