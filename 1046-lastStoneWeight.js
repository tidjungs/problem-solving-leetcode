var lastStoneWeight = function(stones) {
  while (stones.length > 1) {
      let max = -Infinity
      let maxIndex = -1
      for (let i=0; i<stones.length; i++) {
          if (stones[i] > max) {
              max = stones[i]
              maxIndex = i
          }
      }
      stones.splice(maxIndex, 1)
      let max2 = -Infinity
      let maxIndex2 = -1
      for (let i=0; i<stones.length; i++) {
           if (stones[i] > max2) {
              max2 = stones[i]
              maxIndex2 = i
          }
      }
      stones.splice(maxIndex2, 1)
      if (max > max2) {
          stones.push(max - max2)
      }
  }
  if (stones.length === 1) {
      return stones[0]
  }
  return 0
}