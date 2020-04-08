var maxProfit = function(prices) {
  let maxProfit = 0
  let minPrice = Infinity
  for (let i=0; i<prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i]
      }
      if (prices[i] - minPrice > maxProfit) {
          maxProfit = prices[i] - minPrice
      }
  }
  return maxProfit
}