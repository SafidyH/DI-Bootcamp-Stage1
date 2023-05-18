const colors = ["blue", "red", "green", "yellow", "purple"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  let choice;
  if (i < suffixes.length) {
    choice = `${i + 1}${suffixes[i]}`;
  } else {
    choice = `${i + 1}${suffixes[suffixes.length - 1]}`;
  }
  console.log(`My ${choice} choice is ${colors[i]}`);
}