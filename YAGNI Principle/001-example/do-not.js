// DON'T
const products = [
    {
        id: 555,
        title: "product 1"
    },
    {
        id: 312,
        title: "product 2"
    }
]

const removeProductFromCart = (productId) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            products.splice(i, 1)
            break
        }
    }
}

const removeAllProductsFromCart = () => {
    console.log("we will need it in the future")
}
