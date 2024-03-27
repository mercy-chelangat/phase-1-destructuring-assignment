const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
// String destructuring
const { moo, neigh, baa, oink, cluck } = { moo: "cow", neigh: "horse", baa: "sheep", oink: "pig", cluck: "chicken" };

// Traditional animal names
const { bessie, dolly, babe, little } = { bessie: "cow", dolly: "sheep", babe: "pig", little: "chicken" };

// Traditional animal colors
const { blackAndWhite, black, pink } = { blackAndWhite: "cow", black: "sheep", pink: "pig" };

// Array destructuring
const [red, orange, yellow, green, blue, indigo, violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [r, o, y, g, b, , v] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [, , , , , indg] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Object destructuring
// Object destructuring
const { muppetName, color, song, job, partner, nested: { job: nestedJob, partner: nestedPartner } } = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  nested: { job: "Host of The Muppet Show", partner: "Miss Piggy" }
};
const { song2, song4 } = { song2: "Moving Right Along", song4: "I Hope That Something Better Comes Along" };

// Exporting variables for testing
module.exports = {
  muppetName, color, song, job, partner,
  song2, song4, nestedJob, nestedPartner
};







