class Screen {
  constructor(screenName) {
    this.screenName = screenName;
    this.theaterName = null;
    this.movie = null;
    this.dimentionality = null
    this.language = null
  }

  getScreenDetails() {
    return {
      screenName: this.screenName,
    };
  }

	setTheaterName(theaterName) {
		this.theaterName = theaterName;
	}

	setMovie(movie) {
		this.movie = movie;
	}

	setDimentionality(dimentionality) {
		this.dimentionality = dimentionality;
	}

	setLanguage(language) {
		this.language = language;
	}
  
  updateTheaterName(
    theaterName = this.theaterName,
  ) {
    this.theaterName = theaterName;
    return {
      screenName: this.screenName,
      theaterName: this.theaterName,
    };
  }
}

module.exports = Screen;