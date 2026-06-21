const rechargeEvents = require('../events/rechargeEvents');
const fs = require('fs');


rechargeEvents.on('recharge:done',(data)=> {
    const logEnrty = `[${new Date().toISOString()}] Mobile: ${data.mobile} | Amount: ${data.amount}\n`;
    fs.appendFile('rechargeLog.log',logEnrty ,(err)=>{
        if(err){
            console.log('[log error]',err.message);
            return           
        }
    });
    console.log(`[Log] Recharge log save hua -> recharge.log`);

    
});