const transactionEvents = require('../events/transactionEvents');

// In-memory balance (real project mein DB mein hoga)
const accounts = {
  'ACC001': 100000,
  'ACC002': 50000,
};

transactionEvents.on('transaction:done', (data) => {
  const oldBalance = accounts[data.accountId] || 0;


    // ── Pehle check karo ──
  if (data.type === 'debit' && oldBalance < data.amount) {
    console.log(`[Balance] INSUFFICIENT FUNDS!`);
    console.log(`          Available: Rs. ${oldBalance} | Required: Rs. ${data.amount}`);
    transactionEvents.emit('transaction:failed', data);
    return; // ← yahan rok do, balance mat katao
  }

  if (data.type === 'debit') {
    accounts[data.accountId] = oldBalance - data.amount;
  } else {
    accounts[data.accountId] = oldBalance + data.amount;
  }

  data.newBalance = accounts[data.accountId]; // baaki listeners ke liye update karo

  console.log(`[Balance] Account ${data.accountId} update hua:`);
  console.log(`          Pehle: Rs. ${oldBalance} → Abhi: Rs. ${accounts[data.accountId]}`);

  // Low balance warning
  if (accounts[data.accountId] < 5000) {
    console.log(`[Balance Warning] Rs. 5000 se kam balance! User ko alert karo`);
    transactionEvents.emit('balance:low', data);
  }
});


// Naya listener — failed transaction handle karo
transactionEvents.on('transaction:failed', (data) => {
  console.log(`[Transaction Failed] Rs. ${data.amount} debit REJECTED`);
  console.log(`                     Reason: Insufficient funds`);
});

transactionEvents.on('balance:low', (data) => {
  console.log(`[Low Balance Alert] ${data.phone} ko low balance SMS bheja`);
});
