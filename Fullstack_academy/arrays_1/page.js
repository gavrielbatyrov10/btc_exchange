let myInstruments = ["flute", "clarinet", "trumpet", "tuba", "bassoon"];

myInstruments.push("tuba");
myInstruments.push("bassoon");
myInstruments.splice(2, 1);
myInstruments.unshift("saxophone");

function getFirstInstrument(instruments) {
  return instruments[0];
}

function getLastInstrument(instruments) {
  return instruments[instruments.length - 1];
}

function getFirstAndLastInstruments(instruments) {
  const output = [];
  output.push(instruments[0]);
  output.push(instruments[instruments.length - 1]);
  return output;
}

function getFirstThreeInstruments(instruments) {
  const output = [];
  output.push(instruments[0]);
  output.push(instruments[1]);
  output.push(instruments[2]);
  return output;

  // Can you think of other ways to do this?
}

// Here's one way to do it with a loop:
function getFirstThreeInstrumentsWithLoop(instruments) {
  const output = [];
  for (let i = 0; i < 3; i++) {
    output.push(instruments[i]);
  }
  return output;
}

// /**
//  * @param {string[]} instruments an array of instruments
//  * @returns {string[]} all instruments that start with "t"
//  */
function getTInstruments(instruments) {
  const output = [];
  for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    // Remember we can also use string indexes!
    if (instrument[0] === "t") {
      output.push(instrument);
    }
  }
  return output;
}

// /**
//  * @param {string[]} instruments an array of instruments
//  * @returns {string} the instrument with the longest name
//  */
function getLongestNamedInstrument(instruments) {
  let longestInstrument = "";
  // Here we use a for..of loop as syntactic sugar for the index loop
  for (const instrument of instruments) {
    if (instrument.length > longestInstrument.length) {
      longestInstrument = instrument;
    }
  }
  return longestInstrument;
}
