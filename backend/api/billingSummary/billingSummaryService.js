const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

function getSummary(req, res) {
    BillingCycle.find((err, item) => {
        if(err) {
            res.status(500).json({erros: [error]})
        } else {
            res.json(getSum(item))
        }
    });
}

function getSum(item){
    var credSum = 0, debtSum = 0
    for(var i=0; i<item.length; i++){
        for(var j=0; j<item[i].credits.length; j++){
            credSum += item[i].credits[j].value;
        }
        for(var j=0; j<item[i].debts.length; j++){
            debtSum += item[i].debts[j].value;
        }
    }
    console.log(credSum, debtSum)
    return {credit: credSum, debt: debtSum};
   // return item
}

module.exports = { getSummary }
