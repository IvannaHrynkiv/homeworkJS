const cartsDiv = document.getElementById('carts');
fetch(' https://dummyjson.com/carts')
.then(value => value.json())
.then(cartsObject => {
    const {carts} = cartsObject;
    console.log(carts);

    for (const cart of carts){
        const div = document.createElement('div');
        div.classList.add('cart-container');
        const divWithInfo = document.createElement('div');
        divWithInfo.innerText = `
        "total": ${cart.total},
        "discountedTotal": ${cart.discountedTotal},
        "userId": ${cart.userId},
        "totalProducts": ${cart.totalProducts}
        "totalQuantity": ${cart.totalQuantity}
        `
        div.appendChild(divWithInfo);
        cartsDiv.appendChild(div);
    }

});