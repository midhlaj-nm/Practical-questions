const EventEmitter = require('events')
const event = new EventEmitter();
event.on('sayhello', () => console.log('How are you!'))
event.emit('sayhello')


event.on('hi', () => console.log('Are you fine with this'))
event.emit('hi')