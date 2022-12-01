const customerDao =  require('./customerDAO');

async function saveCustomer(customer, done) {
   
    customerDao.saveCustomer(customer, done);
}

async function getCustomerById(customer,customerId, done) {
   
    customerDao.getCustomerById(customer, customerId, done);
 }

 module.exports = {saveCustomer, getCustomerById}