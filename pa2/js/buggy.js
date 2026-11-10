/* ==========================================================
   CSDP 232 · PA2 — Book Swap Logic
   buggy.js — Part C: Debugging
   ----------------------------------------------------------
   Each function below has EXACTLY ONE bug.
   1. Reproduce it (self-check page or the Console)
   2. Read the exact error message or the wrong result
   3. Fix it with the smallest change - do not rewrite the function
   4. Log it in the bug log in README.md
   ========================================================== */


/// C1
function welcomeMessage(name) {
  const greeting = "Welcome to Shore Book Swap, ";
  return greeting + name + "!";
}

// C2
function isOnSale(listing) {
  if (listing.condition === "fair") {
    return true;
  }
  return false;
}

// C3
function cartSubtotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
  }
  return total;
}

// C4
function addTax(subtotal) {
  const withTax = subtotal * 1.06;
  const rounded = Math.round(withTax * 100) / 100;
  return rounded;
}

// C5
function addShipping(subtotalText) {
  const shipping = 5;
  return Number(subtotalText) + shipping;
}