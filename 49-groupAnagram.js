var groupAnagrams = function(strs) {
  const sortStrs = strs.map(str => str.split('').sort().join())
  const map = {}
  for (let i=0; i<strs.length; i++) {
      if (map[sortStrs[i]]) {
          map[sortStrs[i]].push(strs[i])
      } else {
          map[sortStrs[i]] = [strs[i]]
      }
  }
  return Object.values(map)
}

console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]))