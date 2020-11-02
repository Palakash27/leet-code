var maxProfit1 = function (prices) {
  let profit = 0;
  let buyCost = prices[0];
  let buyCostIndex = 0;
  let startIndex = 1;
  while (true) {
    //BUY
    for (let i = startIndex; i < prices.length; i++) {
      if (buyCost >= prices[i]) {
        buyCostIndex = i;
        buyCost = prices[i];
      } else {
        break;
      }
    }

    // break if reached end of array
    if (buyCostIndex == prices.length - 1) {
      if (profit == 0) {
        return 0;
      }
      return profit;
    }

    //Sell
    let sellCost = prices[buyCostIndex + 1];
    let sellCostIndex = buyCostIndex + 1;
    for (let i = buyCostIndex + 1; i < prices.length - 1; i++) {
      if (prices[i] <= prices[i + 1]) {
        sellCost = prices[i + 1];
        sellCostIndex = i + 1;
      } else {
        break;
      }
    }
    profit += sellCost - buyCost;

    if (sellCostIndex == prices.length - 1) {
      if (profit == 0) {
        return 0;
      }
      return profit;
    }
    startIndex = sellCostIndex + 1;
    buyCost = prices[startIndex];
  }
};

console.log(maxProfit1([2, 1, 4, 5, 2, 9, 7]));
// console.log(maxProfit([2, 1, 2, 0, 1]));
// console.log(maxProfit([1, 1, 0]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
// console.log(maxProfit([1, 2, 3, 4, 5]));
// console.log(maxProfit([7, 1, 5, 3, 6, 7])); 7

//-----------------------------------------------
//-------------Best-Answer-----------------------
//-----------------------------------------------
let maxProfit2 = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};
console.log(maxProfit2([7, 1, 5, 3, 6, 7]));
