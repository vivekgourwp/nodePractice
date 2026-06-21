const transactionEvents = require('../events/transactionEvents');

transactionEvents.on('transaction:done', (data) => {
  // Real project mein: Nodemailer ya SendGrid se email jayegi
  console.log(`[Email] ${data.email} ko email bheja:`);
  console.log(`        Subject: "Transaction Alert - ${data.type.toUpperCase()}"`);
  console.log(`        Body: Rs. ${data.amount} ka ${data.type} | Ref: ${data.transactionId}`);
});
