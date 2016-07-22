var audio = require('./audio.json')
console.log('STARTING', audio.length + ' audio')

function getItems(dictionnary, min, max) {
  var num = Math.ceil(min + Math.random() * (max - min));
  var words = [];
  var clone = JSON.parse(JSON.stringify(dictionnary));
  for(i=0; i<num; i++) {
    var idx = Math.floor(Math.random() * clone.length);
    words = words.concat(clone.splice(idx, 1));
  }
  return words;
}

function playLocal(path, delay) {
  setTimeout(function() {
    var player = require('play-sound')(opts = {})
    player.play(path, function(err) {
      console.log('Done.', err)
    })
  }, delay);
}



/////////////////////////////////////////////////////////////////////


var express = require('express');
var app = express();

app.use('/', express.static('./'));

app.get('/play/:idx', function (req, res, next) {
  console.log(req.params.idx, typeof(req.params.idx));

  var chosen = audio[parseInt(req.params.idx)];// getItems(audio, 1, 1)[0];

  res.sendFile(__dirname + '/' + chosen.ping, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', chosen.ping, chosen.pong);
      playLocal(__dirname + '/' + chosen.pong, chosen.delay);
    }
  });

});
app.listen(process.env.PORT || 8080);
