var router = require('express').Router();
var request = require('request');
var botToken = require('../config.json').botToken;

router.get('/', function (req, res) {
    res.render('index', {
        username: '',
        imageUrl: '',
        channel: ''
    });
});

router.post('/', function (req, res) {
    request.post('https://slack.com/api/chat.postMessage', {
        form: {
            token: botToken,
            as_user: false,
            link_names: true,
            username: sanitiseText(req.body.username || ''),
            icon_url: sanitiseText(req.body.imageUrl || ''),
            channel: sanitiseText(req.body.channel || ''),
            text: sanitiseText(req.body.message || '')
        }
    }, function (err, response, body) {
        var resObject = {
            username: sanitiseText(req.body.username || ''),
            imageUrl: sanitiseText(req.body.imageUrl || ''),
            channel: sanitiseText(req.body.channel || '')
        };

        var parsedBody = JSON.parse(body);
        if (!parsedBody.ok) {
            resObject.error = "Error sending message: " + parsedBody.error;
        } else {
            resObject.message = "Message Sent!"
        }
        // Check response and re-render
        res.render('index', resObject);
    });
});

module.exports = router;

function sanitiseText(text) {
    return text.replace(/&/g , '&amp;')
        .replace(/</g , '&lt;')
        .replace(/>/g , '&gt;');
}