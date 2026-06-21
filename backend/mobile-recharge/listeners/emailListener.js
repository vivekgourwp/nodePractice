const rechargeEvents = require('../events/rechargeEvents');

rechargeEvents.on('recharge:done',(data)=>{
    console.log(`[Email] ${data.mobile} ko ${data.amount} ka rechage kiya gya hai`);
    
});