const rechargeEvents = require("../events/rechargeEvents");

rechargeEvents.once("recharge:done", function updateBalance(data) {
  console.log(`[Balance] ${data.mobile} ka balance update hua:`);
  console.log(`          Recharge amount: Rs. ${data.amount}`);
  console.log(`          New balance: Rs. ${data.amount} (prepaid)`);
});
