(function() {
  //function that returns a random number:
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

//create traveler object
function Traveler(name) {
  this.name = name;
  this.food = getRandomIntInclusive(1,100);
  this.isHealthy = true;
  }

//make an object called wagon that hasA wagon has a few properties as well: a passengers list (array) and a capacity (number).
function Wagon(capacity){
  this.passengers = [];
  this.capacity = capacity;
}

//make a function called makeTraveler that calls the Traveler function/object above
function makeTraveler(name) {
  return new Traveler(name)
}

// Create a wagon called 'wagon'
function makeWagon(capacity)  {

  return new Wagon(capacity);
}

// Create a traveler with the name 'Henrietta' called 'traveler' that calls th makeTraveler function:
let traveler = makeTraveler('Henrietta');

//create a 2nd traveler2, called Juan:
let traveler2 = makeTraveler('Juan');


// Create a wagon called 'wagon'
let wagon = makeWagon(5);

//have the traveler join the wagon if capacity allows: if capacity >= 1, push traver to wagon array
// passengerCount + availability = capacity
function join(wagon, traveler) {
  console.log("the wagon passengersList before is " + wagon.passengers);

  if ((wagon.capacity - wagon.passengers.length) >= 1) {
    wagon.passengers.push(traveler);
    }
  console.log('the passengersList after is: ' + wagon.passengers);
}
//Return true if there is at least one unhealthy person in the wagon. Return false if not.
function quarantine(wagon) {
    wagon.passengers  //get a list of passengers
        //loop thru and evaluate if any traveler.name.isHealthy = false;
        for (i=0; i< wagon.passengers.length; i++){
          if (wagon.passengers[i].isHealthy == false){
              console.log('The sick passenger is: ' + wagon.passengers[i].isHealthy);
            return true;
        }
      }return false;
}
//Return the total amount of food among all occupants of the wagon.
// food(wagon)




console.log(wagon.capacity);
//make a function for travel to hunt:
function hunt(traveler) {
  console.log('traveler.food before the hunt: ' + traveler.food);
  if (getRandomIntInclusive(0,1) > 0){
    traveler.food = traveler.food + 100;
    console.log('after hunt food is: ' + traveler.food);
  } //set this.food + 100 //evaluate condition, if 1 = true, if 0 = false

}
//make a function for the traveler to eat, and if < 20, set isHealthy = false.
function eat(traveler) {
  console.log('traveler food available to eat: ' + traveler.food);
  //if food>=20, food = food - 20
  if (traveler.food >= 20){
    traveler.food = traveler.food - 20;
  }else{    //if food < 20, set food = 0, set isHealthy = false.
    traveler.isHealthy = false;
    traveler.food = 0;
  }
  //if food < 20, set food = 0, set isHealthy = false.
  console.log('After eating, food: ' + traveler.food)
  console.log('After eating, isHealthy: ' + traveler.isHealthy)
}
join(wagon, traveler);
join(wagon,  traveler2);
hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2);
eat(traveler2);
eat(traveler2);
console.log(traveler2);
//console.log('traveler food after the hunt function:' + traveler.food);
console.log(wagon);
console.log(quarantine(wagon)); // print true if someone is sick, false otherwise

})()
