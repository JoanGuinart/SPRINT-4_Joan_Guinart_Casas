const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director == director);
  console.log(result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let MoviesFromDirector = getMoviesFromDirector(array, director); // importem la funció en una variable
  let averageOfDirector = MoviesFromDirector.reduce(
    (previousValue, currentValue) => previousValue.score + currentValue.score
  ); // suemem totes les scores del determinat director
  averageOfDirector = Number(
    (averageOfDirector / MoviesFromDirector.length).toFixed(2)
  ); // fem la mitja tipica de tota la vida amb 2 decimals
  return averageOfDirector;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let titles = array.map((movie) => movie.title);
  titles.sort((previousValue, currentValue) =>
    previousValue > currentValue ? 1 : -1
  ); // concició if 1 = true if -1 = false
  titles = titles.slice(0, 20); // desde el index 0 fins al 20 pero sense incluir la posicio 20
  return titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const movies = array.map((x) => ({ ...x }));

  const moviesOrdered = movies.sort((previousValue, currentValue) => {
    if (previousValue.year == currentValue.year) {
      return previousValue.title.toUpperCase() >
        currentValue.title.toUpperCase()
        ? 1
        : -1;
    }
    if (!(previousValue.year == currentValue.year)) {
      return previousValue.year - currentValue.year;
    }
  });
  return moviesOrdered;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesGenre = array.filter((movie) => {
    return (
      movie.genre.length == 1 &&
      movie.genre.includes(genre) == true &&
      movie.score > 1
    );
  });

  let averageGenre = 0;
  for (let movie of moviesGenre) {
    averageGenre += movie.score;
  }
  averageGenre = Number((averageGenre / moviesGenre.length).toFixed(2));

  // console.log('Ex. 6 ->', averageGenre);

  return averageGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  /*    let textToMinutes = array.map(movie => {
    let hours = parseInt(movie.duration[0])*60
    let minutes = movie.duration.length > 3 ? parseInt(movie.duration.slice(3, -3)) : 0;
    let newDuration = {
          duration: hours + minutes
      };
  return textToMinutes;
  }); */

  const movies = array.map((movie) => ({ ...movie }));
  for (let movie of movies) {
    let duration = movie.duration;
    let hours = Number(duration.match(/\d+(?=h)/g));
    let minutes = Number(duration.match(/\d+(?=min)/g));
    let totalMinutes = hours * 60 + minutes;
    movie.duration = totalMinutes;
  }
  return movies;
}
// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
