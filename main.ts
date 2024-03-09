/**
*
* This program plays rock paper scissors with the user
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-01
*/

import { createPrompt } from 'bun-promptx'

// Randomly chooses rock, paper, or scissors
function rockPaperScissors() {
  const randomInt = Math.floor(Math.random() * 3) + 1
  let choice = "invalid"
  switch (randomInt) {
  case 1:
    choice = "rock"
    break
  case 2:
    choice = "paper"
    break
  case 3:
    choice = "scissors"
    break
  }
  return choice
}

// Choice loop
while (true) {
  // Choice string
  const choiceObject = createPrompt('Choose rock, paper or scissors: ')
  const choice = choiceObject.value

  // Check for correct input
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    // Valid input
    const computerChoice = rockPaperScissors()
    console.log(`Your opponent chose ${computerChoice}.`)
    if (choice == "rock" && computerChoice == "scissors" ||
        choice == "paper" && computerChoice == "rock" ||
        choice == "scissors" && computerChoice == "paper"
    ) {
      // Player win
      console.log("\nYou win!")
      break
    } else if (choice == computerChoice) {
      console.log("\nThere was a draw.\n")
    } else {
      // Computer win
      console.log("\nYou lost.")
      break
    }
  } else {
    // Invalid input
    console.log('Not a correct choice.')
  }
}

// Show the program as done
console.log('\nDone.')
