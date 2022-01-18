const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask questions one after the other - make each rl.question's callback the next question until final output
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (hobby) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl. question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              // Output string broken onto several lines for readability
              console.log(`${name} loves listening to ${music} while ${hobby},` +
              ` devouring ${food} for ${meal}, prefers ${sport} over any other sport,` +
              ` and is amazing at ${superpower}.`);
              // Close the readling after the bio has been generated
              rl.close();
            });
          });
        });
      });
    });
  });
});




// SAMPLE OUTPUT
// Devani loves listening to Ludovico Einaudi while coding,
// devouring Yak Momos for brunch, prefers Tennis over any other sport,
// and is amazing at dropping mad puns at inopportune times.