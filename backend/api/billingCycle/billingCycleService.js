const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true}) // retorna  o obj novo no retorno do put

BillingCycle.route('count', function(req, res, next){
    BillingCycle.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]})
        } else{
            res.json({value})
        }
    }) // acessando api do mongodb
})

module.exports = BillingCycle

