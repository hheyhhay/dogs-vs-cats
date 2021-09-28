
# Do you Love Dogs or Cats More?


Deployed site: [whodoyoulove.surge.sh](http://whodoyoulove.surge.sh/)

## Table of Contents
  - [Abstract](#abstract)
  - [Technologies](#technologies)
  - [Code Architecture](#code-architecture)
  - [Illustrations](#illustrations)
  - [Install](#install)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Abstract

This application is specifically designed for people who really love dogs and really love cats equally, but feel that they would like to have a clearer answer when someone asks if they are a dog or cat person. The user is prompted to self-declare if they lean towards liking dogs, cats or love them equally. Then the user is shown 7 pairs of pictures, one dog and one cat, and they have to choice which they think is cuter. After the game is over, the user is told if they were right one their guess or wrong depending on if they like more dog or cat pictures. The user can then click the favorites button and see all of their photos they liked.

This projet was built for the final solo project for the third module at Turing School of Software and Design. The goal of the project is to use React, React router, and an api of our choice to create an application for a niche audience.

## Technologies
  - React
  - React Router
  - Atom
  - Restful API
  - Cypress
  - HTML
  -  CSS


## Code Architecture

 - __src__
     - __App__
       - [App.css](src/App/App.css)
       - [App.js](src/App/App.js)
       - [App.test.js](src/App/App.test.js)
     - __Error__
       - [Error.css](src/Error/Error.css)
       - [Error.js](src/Error/Error.js)
       - [error\-image.jpg](src/Error/error-image.jpg)
     - __Favorites__
       - [Favorites.css](src/Favorites/Favorites.css)
       - [Favorites.js](src/Favorites/Favorites.js)
     - __Game__
       - [Game.css](src/Game/Game.css)
       - [Game.js](src/Game/Game.js)
     - __Results__
       - [Results.css](src/Results/Results.css)
       - [Results.js](src/Results/Results.js)
     - [apiCalls.js](src/apiCalls.js)
     - [index.css](src/index.css)
     - [index.js](src/index.js)
     - [logo.svg](src/logo.svg)
     - [pawel\-czerwinski.jpg](src/pawel-czerwinski.jpg)
     - [reportWebVitals.js](src/reportWebVitals.js)
     - [util.js](src/util.js)

## Illustrations


<img src='https://github.com/hheyhhay/dogs-vs-cats/blob/main/recording%20(2).gif' alt="Who do you Love  gif" title="Who do you love gif" width="500"/>


## Install

Visit the deployed site: [whodoyoulove.surge.sh](http://whodoyoulove.surge.sh/)

or

To run the application on a local machine:
Clone down repository
`cd` into repository
Run `npm install`
Run `npm start`
Webpage will open in seperate browser



## Contributors
  - [Hayley Dixon](https://github.com/hheyhhay)

## Wins
- The styling and CSS was fun and I feel it looks very good
- Using two different APIs to fetch the data
- Building a react app that used game logic 

## Challenges + Improvements
- For future iterations I would like to add a loading gif while the application is fetching new images
- Use local storage for users to be able to save their favorite images
- Improve of Cypress Testing


## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)
