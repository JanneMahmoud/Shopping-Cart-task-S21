function calculateShipping(weight) {
    return new Promise(function (resolve, reject) {
        if (weight > 0) {
            resolve(weight * 5);
        } else {
            reject("Invalid weight");
        }
    });
}

calculateShipping(10)
    .then(function (cost) {
        console.log("Shipping cost:", cost);
    })
    .catch(function (error) {
        console.log(error);
    });

calculateShipping(-2)
    .then(function (cost) {
        console.log("Shipping cost:", cost);
    })
    .catch(function (error) {
        console.log(error);
    });