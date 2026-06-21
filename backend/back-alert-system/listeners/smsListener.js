const transactionEvents = require('../events/transactionEvents');

transactionEvents.on('transaction:done', (data) => {
  // Real project mein: Twilio ya AWS SNS se SMS jayega
  console.log(`[SMS] ${data.phone} ko message bheja:`);
  console.log(`      "Rs. ${data.amount} ${data.type === 'debit' ? 'katay' : 'aaye'} aapke account se.`);
  console.log(`       Available balance: Rs. ${data.newBalance}"`);
});
