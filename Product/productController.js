const productService =  require('./productService');

async function saveProduct(customer, done) {
   
    productService.saveProduct(customer, done);
}

async function getProductById(customer,customerId, done) {
   
    productService.getProductById(customer, customerId, done);
 }

 module.exports = {saveProduct, getProductById}