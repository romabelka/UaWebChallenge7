var Gitter = require('node-gitter'),
    calculate = require('./src/calculate'),
    token = '43e4c18aea4d7a7e7c36e780e868e4fe6585f643',
    roomName = 'romabelka/UaWebChallenge7',
    gitter = new Gitter(token);

gitter.currentUser()
    .then(function(user) {
        console.log('You are logged in as:', user.username);
    });
gitter.rooms.join(roomName)
    .then(function(room) {
        var events = room.listen();
        console.log('Joined room: ', room.name);

        events.on('message', function(message) {
            if (message.text.indexOf('calc') !== 0) return;
            var expression = message.text.slice(5);
            room.send(expression + ' = ' + calculate(expression));
        });
    })
    .fail(function(err) {
        console.log('Not possible to join the room: ', err);
    });
