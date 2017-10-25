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
            link_names: true,
            username: sanitiseText(req.body.username || ''),
            channel: sanitiseText(req.body.channel || ''),
            text: sanitiseText(req.body.message || '')
        }
    }, function (err, response, body) {
        // Check response and re-render
        res.end();
    });
});

module.exports = router;

function sanitiseText(text) {
    return text.replace(/&/g , '&amp;')
        .replace(/</g , '&lt;')
        .replace(/>/g , '&gt;');
}