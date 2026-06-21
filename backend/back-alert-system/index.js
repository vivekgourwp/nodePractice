// Step 1: Sab listeners load karo (register ho jaate hain)
require('./listeners/balanceListener');
require('./listeners/fraudListener');
require('./listeners/smsListener');
require('./listeners/emailListener');
require('./listeners/logListener');

// Step 2: Service load karo
const { processTransaction } = require('./services/transactionService');

// ── Test Transactions ──────────────────────────────────

// Transaction 1: Normal debit
processTransaction('ACC001', 5000, 'debit', {
  phone: '+91-9876543210',
  email: 'vivek@example.com',
});

// Transaction 2: Normal credit
processTransaction('ACC001', 2000, 'credit', {
  phone: '+91-9876543210',
  email: 'vivek@example.com',
});

// Transaction 3: High amount — fraud detection chalega
processTransaction('ACC002', 75000, 'debit', {
  phone: '+91-9123456789',
  email: 'rahul@example.com',
});

// Transaction 4: Low balance situation
processTransaction('ACC001', 90000, 'debit', {
  phone: '+91-9876543210',
  email: 'vivek@example.com',
});