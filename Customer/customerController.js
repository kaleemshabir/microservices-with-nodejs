const customerService =  require('./customerService');

async function saveCustomer(customer, done) {
   
    customerService.saveCustomer(customer, done);
}

async function getCustomerById(customer,customerId, done) {
   
    customerService.getCustomerById(customer, customerId, done);
 }

 module.exports = {saveCustomer, getCustomerById}