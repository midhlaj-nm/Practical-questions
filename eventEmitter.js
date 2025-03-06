const EventEmitter = require('events')
const event = new EventEmitter();
event.on('sayhello', () => console.log('How are you!'))
event.emit()