var removeAnagrams = function (words) {
  let result = [words[0]];
  for (let i = 1; i < words.length; i++) {
    let p = words[i - 1].split("").sort().join("");
    let c = words[i].split("").sort().join("");
    if (p !== c) {
      result.push(words[i]);
    }
  }
  return result;
};