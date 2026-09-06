const products = {
    1: "Laptop",
    2: "Phone",
    3: "Tablet"
};

function getProduct(id) {
    return new Promise(function (resolve, reject) {
        if (products[id]) {
            resolve(products[id]);
        } else {
            reject("Product not found");
        }
    });
}

getProduct(2)
    .then(function (product) {
        console.log(product);
    })
    .catch(function (error) {
        console.log(error);
    });