var router = require('express').Router();
var request = require('request');

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/', function (req, res) {
    
});

module.exports = router;

function sanitiseText(text) {
    text.replace(/&/g , '&amp;');
    text.replace(/</g , '&lt;');
    text.replace(/>/g , '&gt;');
}