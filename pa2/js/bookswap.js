/* ==========================================================
   CSDP 232 · PA2 — Book Swap Logic
   bookswap.js — Parts A and B: YOUR CODE
   ----------------------------------------------------------
   Rules (Step 6):
   - const by default, let only when a value changes, never var
   - compare with === and !==, never == or !=
   - keep every function name and parameter exactly as given
   - every function RETURNS its answer (no console.log left)
   - keep the comment above each function
   Replace each "// TODO" line with your code.
   ========================================================== */


/* ---------------- Part A: One Value at a Time ---------------- */

/* ---------------- Part A: One Value at a Time ---------------- */

// A1. Return the amount as a string with a dollar sign and exactly 2 decimals.
function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}

// A2. Return the price after the discount for the condition.
function discountedPrice(price, condition) {
  let discount = 0;

  if (condition === "good") {
    discount = 0.10;
  }
  else if (condition === "fair") {
    discount = 0.25;
  }

  return Math.round(price * (1 - discount) * 100) / 100;
}

// A3. Return one line describing the listing.
function describeListing(listing) {
  let description = `${listing.title} (${listing.course}) - ${listing.condition} - ${formatPrice(listing.price)}`;

  if (listing.sold === true) {
    description += " [SOLD]";
  }

  return description;
}

// A4. Return true when the listing is NOT sold AND its price is at most the budget.
function canBuy(listing, budget) {
  return listing.sold === false && listing.price <= budget;
}



/* ---------------- Part B: Arrays and Objects ---------------- */

// B5. Return the number of listings that are not sold.
function countAvailable(listings) {
  let count = 0;

  for (const listing of listings) {
    if (listing.sold === false) {
      count++;
    }
  }

  return count;
}

// B6. Return the listing whose id matches, or null if there is none.
function findListing(listings, id) {
  const result = listings.find(listing => listing.id === id);

  return result || null;
}

// B7. Return an array of the listings for that course code.
function listingsForCourse(listings, course) {
  return listings.filter(listing => listing.course === course);
}


// B8. Return an array of the TITLES of the listings the buyer can afford.
function affordableTitles(listings, budget) {
  return listings
    .filter(listing => canBuy(listing, budget))
    .map(listing => listing.title);
}

// B9. Return the UNSOLD listing with the lowest price.
function cheapestAvailable(listings) {
  let cheapest = null;

  for (const listing of listings) {
    if (listing.sold === false) {
      if (cheapest === null || listing.price < cheapest.price) {
        cheapest = listing;
      }
    }
  }

  return cheapest;
}

// B10. Return an object describing that seller's UNSOLD listings.
function sellerSummary(listings, seller) {
  let count = 0;
  let total = 0;

  for (const listing of listings) {
    if (listing.seller === seller && listing.sold === false) {
      count++;
      total += listing.price;
    }
  }

  total = Math.round(total * 100) / 100;

  return {
    seller: seller,
    count: count,
    total: total
  };
}