const transactionEvents = require('../events/transactionEvents');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../transactions.log');

transactionEvents.on('transaction:done', (data) => {
  const logEntry = `[${new Date().toISOString()}] ${data.transactionId} | ${data.type.toUpperCase()} | Rs. ${data.amount} | Account: ${data.accountId}\n`;

  // File mein likho
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error('[Log Error]', err.message);
  });

  console.log(`[Log] Transaction record save kiya → transactions.log`);
});
