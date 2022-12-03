require('../dbconfig/dbfile');

async function saveProduct(product, done) {
    data =  await  product.save();
 
    done(undefined, data);
 }
 
 async function getProductById(product,productId, done) {
     data =  await  product.findById(productId);
  
     done(undefined, data);
  }
 
  module.exports = {saveProduct, getProductById}