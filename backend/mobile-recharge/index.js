require('./listeners/balanceListener');
require('./listeners/smsListener');
require('./listeners/emailListener');
require('./listeners/loglistener');

const rechargeEvents = require('./events/rechargeEvents');

console.log("---Recharge Start---");
rechargeEvents.emit('recharge:done',{
    mobile: '7745941010',
    amount: 399
});

rechargeEvents.emit('recharge:done',{
    mobile: '8815087645',
    amount: 299
});

console.log("---Recharge End---");
console.log(rechargeEvents.listeners('recharge:done'));

