function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== strings[i][j]) {
        prefix = prefix.substring(0, j);
        break;
      }
    }
  }
  return prefix;
}

const answer = findLongestCommonPrefix([
  "flowflightflowersdg",
  "flowflightasfasf",
  "flowflightdsgsdgdsg",
  "flowflightsssss",
]);
if (answer === "") {
  console.log("No common prefix");
}
console.log(answer); // "fl"
