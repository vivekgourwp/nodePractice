const EventEmitter = require('events');

class TransactionEventEmitter extends EventEmitter {}

const transactionEvents = new TransactionEventEmitter();

// Error handler — hamesha lagao, warna crash hoga
transactionEvents.on('error', (err) => {
  console.error('[EventEmitter Error]', err.message);
});

module.exports = transactionEvents;
