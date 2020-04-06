# Nasa APOD
> Nasa Astronomy Picture of the Day.

[![Build Status](https://travis-ci.org/gabrieledarrigo/nasa-apod.svg?branch=master)](https://travis-ci.org/gabrieledarrigo/nasa-apod)

An simple Javascript single page application that shows the Astronomy Picture of the Day. with a little explanation on the photo's subject.
You can browse more photos by using the calendar in the navigation menu.

Tinkered with:
- [Nasa APOD API](https://api.nasa.gov/api.html#apod)
- [React.js](https://facebook.github.io/react/) to handle view logic and interaction
- [Immutable.js](https://facebook.github.io/immutable-js/) to define immutable domain objects
- [Moment.js]() to work with date (you know dude, Javascript's date API are horrible!)

### Show me the app please!

Just browse to [http://gabrieledarrigo.github.io/nasa-apod/](http://gabrieledarrigo.github.io/nasa-apod/)

### Installation and run
Clone the repository, than install all application's dependencies:

  $ npm install

Launch all unit tests with:

	$ npm run test

Run the application:

	$ npm run serve

### What's next?
- Social button to share the photo.
- Browse past photos with keyboard arrows.
- Browse past photos with touch gestures (like in a carousel)
- Conquer the world.