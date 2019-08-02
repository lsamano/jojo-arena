# JoJo's Bizarre Arena
## Introduction
This lab will test your mastery of props, state, reusable components, inverse data flow, and conditional rendering.

## Setting
Oh no! The Hitman Team of the Passione Mafia is out to capture Trish Una! It's up to Team Bucciarati to defeat them.

**Disclaimer:** This lab is best enjoyed if you are a fan of JoJo's Bizarre Adventure, a long-running anime/manga series by Hirohiko Araki.

## Setup
We've provided a db.json file, so run `json-server db.json --watch` as well as `yarn && yarn start`.

## Deliverables
### Step 1: Render the Index
- Render each Protagonist card in the Protagonist container
    - Each card contains the Protagonist's name
- Render each Antagonist card in the Antagonist container
    - Each card contains the Antagonist's name

### Step 2: Show Pages
- When a Protagonist is clicked, they should be rendered in the Arena
- On page load, an Antagonist should be chosen at random and rendered in the Arena
- Arena fighters should have their name, stand name, and image rendered

### Step 3: Deleting
- When the fight button is clicked, the winner is chosen at random
    - The losing fighter should be removed from the Arena
    - The losing fighter should be removed from their respective container
    - The winning fighter's name should be written on the ScoreBoard
    - The winning team should receive one point and have it rendered on the ScoreBoard
    - If an Antagonist lost, a new Antagonist should be chosen at random and take their place in the Arena, unless there are no more Antagonists left

### Step 4: Conditional Rendering
- The fight button should be disabled if there is no chosen Protagonist
- When one side has no more fighters remaining,
    - The winning side should be announced on the ScoreBoard.
    - The fight button should be disabled

## Some Hints
- This will randomly return 0 or 1: `Math.floor(Math.random() * 2)`
- Given an array, this will randomly return an element in that array: `array[Math.floor( Math.random() * array.length )]`
- We've implemented Semantic UI React to help with the styling. You can mostly ignore them, except for the provided Button component. It functions similarly to the html `<button>` and can accept an onClick prop and disabled prop.
    - If you wish to disable the Semantic UI Button, you can pass it a prop of disabled as either true or false. For example, `<Button onClick={this.callback} disabled={true}>` will produce a disabled button -  even if clicked, it will not run the onClick callback.
