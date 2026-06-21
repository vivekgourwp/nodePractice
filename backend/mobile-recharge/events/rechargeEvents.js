const EventEmitter = require('events');

class RechargeEventEmitter extends EventEmitter {}

const rechargeEvents = new RechargeEventEmitter();

rechargeEvents.on('error', (err) => {
  console.error('[Error]', err.message);
});

module.exports = rechargeEvents;