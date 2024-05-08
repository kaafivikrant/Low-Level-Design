class Movie {
  constructor(movieName, genre, duration) {
    this.movieName = movieName;
    this.genre = genre;
    this.duration = duration;
    this.language = [];
    this.dimentions = [];
  }

  getMovieDetails() {
    return {
      movieName: this.movieName,
      genre: this.genre,
      duration: this.duration,
      language : this.language,
      dimentions: this.dimentions
    };
  }

  updateMovieDetails(movieName, genre, duration) {
    this.movieName = movieName;
    this.genre = genre;
    this.duration = duration;
    return {
      movieName: this.movieName,
      genre: this.genre,
      duration: this.duration,
    };
  }

  setMovieName(movieName) {
    this.movieName = movieName;
  }

  setGenre(genre) {
    this.genre = genre;
  }

  setDuration(duration) {
    this.duration = duration;
  }

  addLanguage(language) {
    this.language.push(language);
  }

  removeLanguage(language) {
    this.language.splice(this.language.indexOf(language), 1);
  }

  addType(dimentions) {
    this.dimentions.push(dimentions);
  }

  removeType(dimentions) {
    this.dimentions.splice(this.type.indexOf(dimentions), 1);
  }
}

module.exports = Movie