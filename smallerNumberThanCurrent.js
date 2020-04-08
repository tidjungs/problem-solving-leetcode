function smallerNumbersThanCurrent(nums) {
  const sortedNums = nums.slice().sort((a, b) => a > b ? 1 : -1)
  const dict = {}
  for (let i=0; i<nums.length;i++) {
      dict[nums[i]] = -1
  }
  for (let i=0; i<sortedNums.length; i++) {
      if (dict[sortedNums[i]] === -1) {
          dict[sortedNums[i]] = i
      }
  }
  const output = []
  for (let i=0; i<nums.length;i++) {
      output.push(dict[nums[i]])
  }
  return output
}
