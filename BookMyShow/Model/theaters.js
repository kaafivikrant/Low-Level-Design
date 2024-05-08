class Theater {
  constructor(theaterName, company, location) {
    this.theaterName = theaterName;
    this.company = company;
    this.location = location;
    this.screens = [];// screen will be accept instaces of screen 
  }

  getTheaterDetails() {
    return {
      theaterName: this.theaterName,
      company : this.company,
      location: this.location,
      screens: this.screens,
    };
  }

  updateTheaterDetails(theaterName, location) {
    this.theaterName = theaterName;
    this.location = location;
    return {
      theaterName: this.theaterName,
      location: this.location,
    };
  }
  
  setTheaterName(theaterName) {
    this.theaterName = theaterName;
  }

  setCompany(company) {
    this.company = company;
  }

  setLocation(location) {
    this.location = location;
  }
  
  addScreen(screen) {
    // screen will be instace of Screen object
    this.screens.push(screen);
  }

  removeScreen(screen) {
    this.screens.splice(this.screens.indexOf(screen), 1);
  }
}

module.exports = Theater;