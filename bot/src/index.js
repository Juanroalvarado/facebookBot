var express = require('express');
var app = express();
var FBBotFramework = require('fb-bot-framework');

var cuenta = ["Q3000.00","Q3015.50"]
var expr = /pagar|cuesta|pago/, expr2 = /manana|mañana/
// Initialize
var bot = new FBBotFramework({
page_token: "EAACRZBTfvl3MBACVYrZCe43ir9cRH6rICd1TnUA6ZCQZCb995RYkp2AyhFRbYI5zfeQZB9wjbEXI45r46ZCnlsLLKSvxid9xb1q2mSe2fMjck6gnwmjThIgkK92ppvh0Fl5cxnB80IiNMGdA96QYb7LSNpAK31fU1KzqeKQoOLrBM8Ps2UVNet",
verify_token: "6PVyGWkqZBPPs"
});
// Setup Express middleware for /webhook
app.use('/webhook', bot.middleware());
// Setup listener for incoming messages
bot.on('message', function (userId, message ) {
    if (message.search(expr)>0) {
        bot.sendTextMessage(userId, "Hoy te tocaria pagar: " + cuenta[0]);
    } else if (message.search(expr2)>0){
        bot.sendTextMessage(userId, "Mañana te tocaria pagar: " + cuenta[1]);
    } else {
        bot.sendTextMessage(userId, "No entiendo, solo te puedo decir cuanto tienes que pagar");
    }

});
app.get("/", function (req, res){
res.send("hello world");
});
//Make Express listening
app.listen(3000); 