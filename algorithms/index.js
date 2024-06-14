function findLongestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }

  if (strings.length === 1) {
    return strings[0];
  }

  const sortedStrings = strings.sort();

  console.log(sortedStrings);
  let prefix = sortedStrings[0];
  for (let i = 0; i < sortedStrings[0].length; i++) {
    if (sortedStrings[0][i] !== sortedStrings[sortedStrings.length - 1][i]) {
      prefix = prefix.slice(0, i);
      break;
    }
  }

  return prefix;
}

const answer = findLongestCommonPrefix([
  "flowfligsdgwersdg",
  "flowflightasfasf",
  "flowflightdsgsdgdsg",
  "flowflightsssss",
]);
if (answer === "") {
  console.log("No common prefix");
}
console.log(answer); // "fl"
