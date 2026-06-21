const transactionEvents = require('../events/transactionEvents');

// Unique transaction ID banana
const generateId = () => 'TXN' + Date.now() + Math.floor(Math.random() * 1000);

const processTransaction = (accountId, amount, type, userInfo) => {
  console.log(`\n${'─'.repeat(55)}`);
  console.log(`  New Transaction: Rs. ${amount} ${type} | ${accountId}`);
  console.log(`${'─'.repeat(55)}`);

  const transactionData = {
    transactionId: generateId(),
    accountId,
    amount,
    type,           // 'debit' ya 'credit'
    phone: userInfo.phone,
    email: userInfo.email,
    timestamp: new Date().toISOString(),
    newBalance: null, // balanceListener update karega
  };

  // ← Yahi ek line — aur sab kuch apne aap hoga
  transactionEvents.emit('transaction:done', transactionData);

  console.log(`${'─'.repeat(55)}\n`);
};

module.exports = { processTransaction };
