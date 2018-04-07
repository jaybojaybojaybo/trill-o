# Trill-O
#### by Jasun Feddema

## Description
Recreation of the project management app, Trello - using Angular and NoSql database structure.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

##User Stories

* As a user, I want to create boards for projects that I need to complete.
* As a user, I want to add lists to the boards to represent phases of my project.
* As a user, I want to add cards to my lists that represent each task that must be completed within the umbrella board.
* As a user, I want to add, delete, update, and get details on every board, list, and card.
* As a user, I want to move cards from one list to another.
* As a user, I want to see the % of completeness of my boards.
* As a user, I want a record of all completed tasks and projects.

##Specs

* User can create a new board from the dashboard homepage:
  - example input:
      - user clicks button to create new boards.
      - user inputs "Work" as the board's name.
  - example output:
      - on user dashboard, "Work" displays as a board.

* User can create a new list inside the board:
  - example input:
      - user selects "Edit" button within a board div
      - user enters "To Do" as a list
  - example output:
      - within the "Work" board's details page is a new "To Do" list

* User can create a new card inside the list:
  - example input:
      - user selects "Add Card" button within the "To Do" list div
      - user inputs "file reports" task to create a card
  - example output:
      - there is a new "file reports" card inside the "To Do" list

* User can move a card into a new list:
  - example input:
      - user has created a "completed" list under the "Work" board
      - user clicks and drags the "file reports" card into the "completed" list
  - example output:
      - within the "Work" board, "To Do" list is empty and "completed" has the "file reports" card inside it

* User can delete or update every board, list, or card
  - example input:
      - user presses "delete" button on a board, list, or card
  - example output:
      - the item is deleted.
      - the respective board is no longer on the dashboard
      - the respective list is no longer in its respective board
      - the respective card is no longer in its respective list

  - example input:
      - user presses "edit" button on a board, list, or card
      - user enters "stuff" as the new name
  - example output:
      - board's name appears as "stuff"
      - list's name appears as "stuff"
      - card's name appears as "stuff"

* User can see completion statistics on the dashboard
  - example input:
      - Within the "Work" board, user has moved 3 of 4 total cards into the "completed" list
  - example output:
      - "Completed: 75%" will show up as a detail on the "Work" board's div on the dashboard

* User can see completed boards on the "Wall of Completion"
  - example input:
      - Within the "Work" board, user has put 4 of 4 total cards into the "completed" list
  - example output:
      - Entire "Work" board has been moved to the "Wall of Completion" dashboard

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Setup/Installation Requirements

* Make sure angular and the angular-cli is installed on your computer. Follow instructions here: "https://www.learnhowtoprogram.com/javascript/angular/angular-cli-installation-and-setup-0fd426b5-9d6d-4514-a0ed-5102cdc8a01b"
* Clone the git repository from 'https://github.com/jaybojaybojaybo/trill-o.git'.
* Run the 'npm install' command from the terminal.
* Run the 'ng serve --open" command from the terminal to launch the app.
* Generate a Firebase Realtime Database and use your key.
* While in the root folder, run 'npm run start' from the terminal.

## Technologies Used

* TypeScript
* Node.js
* Angular
* Firebase

## Support and contact details

* contact the author at jasun.feddema@gmail.com

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

Copyright (c) 2018 Jasun Feddema

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.