//GIVEN VARIABLES
const product_on_promo = 8723;
const promo_allowed_quantity = 0;

//Example DATA
const cart = [
  {
    id: 8723,
    original_price: "199.99",
    discounted_price: "199.99"
  },
  {
    id: 8723,
    original_price: "199.99",
    discounted_price: "199.99"
  },
  {
    id: 8723,
    original_price: "199.99",
    discounted_price: "199.99"
  },
  {
    id: 8723,
    original_price: "199.99",
    discounted_price: "199.99"
  },
  {
    id: 8723,
    original_price: "199.99",
    discounted_price: "199.99"
  },
  {
    id: 8723,
    original_price: "199.99",
    discounted_price: "199.99"
  }
];

//Find How many products that is available for the DISCOUNT
const numberOfDiscountedProducts = () => {
  const discounted_product = cart.filter(
    product => `${product.id}` === `${product_on_promo}`
  );

  return discounted_product.length;
};

//Find which DISCOUNT we will be using 10% || 15% || 20%
const discount = product_count =>
  product_count === 1
    ? 0.1 // 10% DISCOUNT
    : product_count === 2
    ? 0.15 // 15% DISCOUNT
    : product_count >= 3
    ? 0.2 // 20% DISCOUNT
    : 1; // N0 DISCOUNT

//Mapping to our cart
const newCart = () => {
  let count = 1;
  return cart.map(product => {
    //Product will be DISCOUNTED when the product_id is equal to the product_on_promo(8723)
    if (product.id === product_on_promo && count <= promo_allowed_quantity) {
      //Getting the DISCOUNTED price
      let new_discounted_price =
        product.original_price -
        product.original_price * discount(numberOfDiscountedProducts());
      product.discounted_price = new_discounted_price.toFixed(2);
    }
    count++;
    return product;
  });
};

//Getting the Total price, Discount, Total Price DISCOUNTED
const checkOut = () => {
  return newCart().reduce(
    (total, product) => total + parseFloat(product.discounted_price),
    0
  );
};

console.log(newCart());
console.log("Total Item/s: " + cart.length);
console.log("Total Item/s Discounted: " + numberOfDiscountedProducts());
console.log("Discount: " + discount(numberOfDiscountedProducts()) * 100 + "%");
console.log("Total Price: " + "$" + checkOut().toFixed(2));
