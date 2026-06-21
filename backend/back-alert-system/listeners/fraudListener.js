const transactionEvents = require('../events/transactionEvents');

transactionEvents.on('transaction:done', (data) => {
  console.log(`[Fraud Check] Transaction check ho raha hai...`);

  // Rule 1: Rs. 50,000 se zyada ka transaction suspicious hai
  if (data.amount > 50000) {
    console.log(`[Fraud Alert] HIGH AMOUNT DETECTED!`);
    console.log(`              Rs. ${data.amount} — manual review mein bheja`);
    transactionEvents.emit('fraud:suspected', data); // ← Naya event emit karo
    return;
  }

  // Rule 2: Raat 1 baje se 5 baje ke beech suspicious hai
  const hour = new Date().getHours();
  if (hour >= 1 && hour <= 5) {
    console.log(`[Fraud Alert] ODD HOURS TRANSACTION!`);
    console.log(`              Raat ke ${hour} baje transaction — suspicious!`);
    transactionEvents.emit('fraud:suspected', data);
    return;
  }

  console.log(`[Fraud Check] OK — koi suspicious activity nahi mili`);
});

// Agar fraud mile toh yeh listener chalega
transactionEvents.on('fraud:suspected', (data) => {
  console.log(`[Fraud System] Transaction ${data.transactionId} HOLD pe daala gaya`);
  console.log(`               Bank ko notify kiya gaya`);
});
