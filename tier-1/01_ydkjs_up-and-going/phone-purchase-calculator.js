// Initialize constants
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

// Initialize variables
var bank_balance = 303.91;
var purchase_amount = 0;

// Functions
function calculateTax(purchase_amount) {
  return purchase_amount * TAX_RATE;
}

function formatPurchaseAmount(purchase_amount) {
  return "$" + purchase_amount.toFixed(2);
}

// Buy phones as long as purchase amount is less than bank_balance
while (purchase_amount < bank_balance) {
  purchase_amount += PHONE_PRICE;
  
  // Buy accessories as long as purchase amount is less than SPENDING_THRESHOLD
  if (purchase_amount < SPENDING_THRESHOLD) {
    purchase_amount += ACCESSORY_PRICE;
  }
}

// Calculate and add tax
purchase_amount += calculateTax(purchase_amount);

// Print out purchase amount, properly formatted
console.log("Purchase amount: " + formatPurchaseAmount(purchase_amount));

// Check purchase_amount against bank_balance to see if you can afford it or not
if (purchase_amount > bank_balance) {
  console.log("You can't afford this purchase.");
}
else {
  console.log("You can afford this purchase.")
}