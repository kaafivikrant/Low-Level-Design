const Customer = require("./Model/customers");
const Movie    = require("./Model/movie");
const Theater  = require("./Model/theaters");
const Screen   = require("./Model/screens");

const inox = new Theater("INOX-Banglore", "Bangalore");
const screen1 = new Screen("SCREEEN-1");
console.log(inox);
console.log(screen1);

screen1.updateTheaterName(inox.theaterName);
inox.addScreen(screen1);

console.log("--------------------------------------------------------------------");

console.log(inox);
console.log(screen1);