require('../dbconfig/dbfile');

async function saveCustomer(customer, done) {
   data =  await  customer.save();

   done(undefined, data);
}

async function getCustomerById(customer,customerId, done) {
    data =  await  customer.findById(customerId);
 
    done(undefined, data);
 }

 module.exports = {saveCustomer, getCustomerById}