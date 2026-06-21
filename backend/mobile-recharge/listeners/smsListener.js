const rechargeEvents = require('../events/rechargeEvents');

rechargeEvents.on('recharge:done',(data)=>{
    console.log(`[sms] ${data.mobile} ko message bheja gya`);
    console.log(`Rs. ${data.amount} ka rechage successfully ho gya hai`);   
});
