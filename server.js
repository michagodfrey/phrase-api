const express = require("express");
const app = express();
const PORT = 3000;

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
      "The practical exam didn't go very well, I felt like a fish out of water",
  },
  5: {
    phrase: "Bull in a china shop",
    meaning: "Clumsy, causing damage with unthinking behaviour",
    example:
      "Don't let Darren near your Christmas lights display, he's like a bull in a china shop",
  },
  6: {
    phrase: "Go down the rabbit hole",
    meaning: "To enter a strange situation, especially if it gets stranger as it unfolds.",
    example:
      "Just a flat tyre but I totally went down the rabbit hole before I finally got it fixed.",
  },
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

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
