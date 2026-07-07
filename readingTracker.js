// Weekly reading log



//Tracks what days are reserved for what books, and how many minutes a day they will be read.
// day (string), book (string), minutes (number). 
// Arrays let us loop over entries in order, and objects allow us to gorup related fields (day/book/minutes) together under one entry. 
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new entry for day, book, and minutes read.
// Inputs: day (string), book (string), minutes (numbers). 
// Output: No return value, but changes the readingLog in place by pushisn a new entry onto it.
function addReadBook(day, book, minutes) {
 
  //Bundles all Inputs together into a single object. 
  const newEntry = { day, book, minutes };

  // the .push adds any new objects into the end of the Log.
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week. 
// This calculates the total number reading minutes across every entry in the log. 
// Output: a number representing all of the reading minutes. 
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
// This function determines which book title appears most in the log.
// Input: The log
// Output: A string with the most frequently read book's title. Or, null if the log is empty. 
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      // If a title isnt recognized, the counter goes to 1. 
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
      // If not, it adds to the count
    }
  }
  // In the function above, maybe shortening the if/else statment to one line will make the code more efficient. 
  // bookCounts[entry.book] = (bookCounts[entry.book] || 0) + 1;
  // Replacing the if/else with this line will clean up the code and remove the overworking. 




  // Tracks whichever book has the highest count seen so far.
  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}



// Prints a summary of minutes read per day. 
// Logs a human readable line to the console for every entry in the log. 
// Inputs: The log 
// Output: No return value. produces console ouput as a side effect only. 
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
// Calls addReadbook with new data, which pushes an entry onto the readingLog.
// This session is inlcuded in every calculation that follows. 
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));


// Test case: calling addReadBook with a brand-new day, book, and minute value to confirm the function correctly handles input it hasn't seen before.
addReadBook("Sunday", "Project Hail mary ", 35);
