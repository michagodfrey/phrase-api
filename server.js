const express = require("express");
const app = express();
// cors allows local servers to get the API data
const cors = require('cors');
const PORT = 3000;

app.use(cors());

const phrases = {
  1: {
    phrase: "Raining cats and dogs",
    meaning: "To be raining heavily",
    example:
      "Looks like it's raining cats and dogs outside, let's get a taxi today.",
  },
  2: {
    phrase: "Mad as cut snakes",
    meaning: "Very angry, crazy, eccentric",
    example:
      "Take care in Queensland mate, they're as mad as cut snakes up there.",
  },
  3: {
    phrase: "Have the lion's share",
    meaning: "To get the largest amount of something",
    example:
      "Sarah got the lion's share of the credit for the project but I think other managers did just as well.",
  },
  4: {
    phrase: "Fish out of water",
    meaning: "To be out of one's usual environment or expertise.",
    example:
      "The practical exam didn't go very well, I felt like a fish out of water.",
  },
  5: {
    phrase: "Bull in a china shop",
    meaning: "Clumsy, causing damage with unthinking behaviour",
    example:
      "Don't let Darren near the kids' sand castle, he's like a bull in a china shop.",
  },
  6: {
    phrase: "Go down the rabbit hole",
    meaning:
      "To enter a strange situation, especially if it gets stranger as it unfolds.",
    example:
      "Just a flat tyre but I totally went down the rabbit hole before I finally got it fixed.",
  },
  7: {
    phrase: "Elephant in the room",
    meaning: "Something very important that everone is ignoring or afraid to talk about.",
    example: "His drinking problem was the elephant in the room; everyone was afraid to talk about it",
  },
  8: {
    phrase: "Sitting ducks",
    meaning: "Easy targets, vulnerable",
    example: "We have no defences here, if the enemy attack we'll be sitting ducks."
  },
  9: {
    phrase: "Until the cows come home",
    meaning: "Something that won't happen or finish for a long time",
    example: "This is taking forever, we'll be here until the cows come home."
  },
  10: {
    phrase: "Straight from the horse's mouth",
    meaning: "Information directly from the someone with experience or authority.",
    example: "I wouldn't have believed it but this was straight from the horse's mouth."
  },
  11: {
    phrase: "Have bigger fish to fry",
    meaning: "To have more important things to do.",
    example: "Don't worry about the replying yet, you have bigger fish to fry."
  },
  12: {
    phrase: "Let the cat out of the bag",
    meaning: "To reveal a secret",
    example: "It was supposed to be a secret but someone let the cat out of the bag."
  }
};

app.get("/", (req, res) => {
  // __dirname tells the server to start looking in the same directory this server.js file is located
  res.sendFile(__dirname + "/index.html");
});

app.get("/random-phrase", (req, res) => {
  let phraseKeys = Object.keys(phrases);
  let randomPhrase = phraseKeys[Math.floor(Math.random() * phraseKeys.length)];
  res.json(phrases[randomPhrase]);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
