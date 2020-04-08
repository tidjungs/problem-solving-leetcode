var maxProfit = function(prices) {
  let maxProfit = 0
  let buy = prices[0]
  for (let i=1; i<prices.length; i++) {
    if (prices[i] < prices[i-1]) {
        maxProfit += prices[i-1] - buy
        buy = prices[i]
    }
  }
  if (buy !== prices[prices.length -1]) {
      maxProfit += prices[prices.length -1] - buy
  }
  return maxProfit
}