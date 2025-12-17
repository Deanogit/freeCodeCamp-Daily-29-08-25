// Candlelight
// Given an integer representing the number of candles you start with, and an integer representing how many burned candles it takes to create a new one, return the number of candles you will have used after creating and burning as many as you can.

// For example, if given 7 candles and it takes 2 burned candles to make a new one:

// Burn 7 candles to get 7 leftovers,
// Recycle 6 leftovers into 3 new candles (1 leftover remains),
// Burn 3 candles to get 3 more leftovers (4 total),
// Recycle 4 leftovers into 2 new candles,
// Burn 2 candles to get 2 leftovers,
// Recycle 2 leftovers into 1 new candle,
// Burn 1 candle.
// You will have burned 13 total candles in the example.

function burnCandles(candles, leftoversNeeded) {
  console.log(candles, leftoversNeeded);
  const mod = candles % leftoversNeeded;
  console.log(candles - mod);

  let totalBurned = candles;
  // let burned = candles;
  let leftovers = candles;
  let newCandles = 0;
  // let recycled = 0;

  // for (let i = 0; i <= candles; i++) {
  while (leftovers >= leftoversNeeded) {
    newCandles = Math.floor(leftovers / leftoversNeeded);
    leftovers = leftovers % leftoversNeeded;
    totalBurned += newCandles;
    leftovers += newCandles;
  }

  return totalBurned;

  // }
  // return candles;
  // console.log(recycleCandles(7))
  // console.log(leftoversRemaining(7))

  // function recycleCandles(num) {
  //  return Math.floor(num / leftoversNeeded)
  // }

  // function leftoversRemaining(num) {
  //  return num % leftoversNeeded;
  // }

  // function countCandles(num){
  // return
  // }
}
