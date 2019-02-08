Web Design test
css
Replicate the layout on the "css & javascript test.mp4"
    - use the assets provided in "/assets" to get your layout as close as possible to the reference video
    - disregard font size and family
    - disregard color accuracy

javascript
on the second fold of the layout, replicate the navigation triggers found on the left side of the reference design
    - Navigate to the frame when the name is clicked
    - Navigate to adjacent frames when a navigation arrow is clicked (UP / DOWN)

UX
use any tool you know to create the transition effects from the reference video




Technical Exam: Critical Thinking
Scenario: We are launching a sales campaign on our digital shop that will run from January 7 th to January 11 th Pacific Standard Time (-16). The promo is Buy 1 frame, Get 10% off | Buy 2 frames, Get 15% off |Buy 3 frames, Get 20% off. Frame(product) id is 8723 and price is $199.99 .

Knowing that the cart data schema if as follows

#schema for the cart
Cart = [{product}, {product}, ..., {product}]

#schema for the product
product = { id: number, original_price: money, discounted_price: I }


a) What date & time in MNL should the sales campaign start and end?

Start date and time = January 7 - 4pm Manila time
End Date and time  = January 12 - 4pm Manila time

b) Provide algorithm for the discount that will be used for this sales campaign. The discount
only applies up to 6 frames.

product_on_promo = 8723;
promo_allowed_quantity = 6;
discount()// 10% || 15% || 20% - Function that determine what discount will be used
numberOfDiscountedProducts() // Function that count the number of products that valid for discount.
let count = 1; // Loop Counter
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

c) Explain the logic behind the algorithm composed on b)

Identified first how many product in the cart that is valid for discount promo.
Then using that number, Identified which discount promo it belongs. 1 = 10% 2 = 15% 3-6 = 20%.
Map trough cart Identified which product is valid for discount then process the discounted_price.
original_price - (original_price * discount) // discount in decimal value.
If the loop count is equal to 6. Skip the process of discounted_price.
Then add all discounted_price to get the total price. // original_price and discounted_price is the same before the process

I created a script to execute my algorithm. discount_algo.html && discount.js
run discount_algo then check the console. 

d) From the algorithm on b), provide total amount due when the customer orders 1 up to 6
frames.

product_id = 8723
original_price = 199.99

1 = $179.99 // 10%
2 = $339.98 // 15%
3 = $479.97 // 20%
4 = $639.96 // 20%
5 = $799.95 // 20%
6 = $959.94 // 20%
