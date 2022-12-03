const productDao =  require('./productDAO');

async function saveProduct(product, done) {
   
    productDao.saveProduct(product, done);
}

async function getProductById(product,productId, done) {
   
    productDao.getProductById(product, productId, done);
 }

 module.exports = {saveProduct, getProductById }