/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let newMovies = movies.map(function(movie) {
    let durationArray = movie.duration.split(" ");
    let hours = parseFloat(durationArray[0].substring(0, 1)) * 60;
    let minutes = parseFloat(durationArray[1].substring(0, 2));
    let durationMinutes = (hours + minutes).toString();
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: durationMinutes,
      genre: movie.genre,
      rate: movie.rate
    };
  });

  return newMovies;
}

/*This works in the console but doesn't pass Jasmine

function turnHoursToMinutes(array) {
  	let moviesMinutes = [];
	let newMovies = array.slice(0);
	newMovies.forEach(function(movie){
		movie.duration = movie.duration.split(" ");
		movie.duration[0] = (parseFloat(movie.duration[0].substring(0,1)))*60;
		movie.duration[1] = parseFloat(movie.duration[1].substring(0,2));
		movie.duration = movie.duration[0] + movie.duration[1];
		movie.duration = movie.duration.toString();
	});
	
  return newMovies;
}*/

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  let sum = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.rate;
  }, 0);
  average = Math.round((sum / array.length) * 100) / 100;
  return average;
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  let dramaMovies = array.filter(function(obj) {
    return obj.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
    return undefined;
  }
  let sum = dramaMovies.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.rate;
  }, 0);
  dramaAverage = Math.round((sum / dramaMovies.length) * 100) / 100;
  return dramaAverage;
}

// Order by time duration, in growing order
function orderByDuration(array) {
  array.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  array.sort(function(a, b) {
    return a.duration - b.duration;
  });
  return array;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  let spielbergDramas = array.filter(function(movie) {
    return (
      movie.genre.includes("Drama") &&
      movie.director.includes("Steven Spielberg")
    );
  });
  if (array.length === 0) {
    return undefined;
  }
  if (spielbergDramas.length === 0) {
    return `Steven Spielberg directed 0 drama movies!`;
  }
  return `Steven Spielberg directed ${spielbergDramas.length} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let titlesMovies = array.map(function(movie) {
    return movie.title;
  });
  titlesMovies.sort();
  let topMovies = titlesMovies.slice(0, 20);
  return topMovies;
}

// Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length === 0) {
    return undefined;
  }

  let yearRate = movies.map(function(movie) {
    return {
      year: movie.year,
      rate: movie.rate
    };
  });
  yearRate.sort(function(a, b) {
    if (a.rate > b.rate) {
      return -1;
    }
    if (a.rate < b.rate) {
      return 1;
    }
    return 0;
  });
  let bestYear = yearRate[0].year;
  let bestRate = yearRate[0].rate;

  return `The best year was ${bestYear} with an average rate of ${bestRate}`;
}
