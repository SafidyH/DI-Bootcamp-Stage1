const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence = myWatchedSeries.join(", ");

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

myWatchedSeries[2] = "friends";
myWatchedSeries.push("breaking bad");
myWatchedSeries.unshift("stranger things");
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1);
const thirdLetter = myWatchedSeries[1][2];

console.log(thirdLetter);
console.log(myWatchedSeries);