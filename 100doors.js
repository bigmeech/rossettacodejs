/**
 * Created by Larry Eliemenye on 24/02/16.
 *
 *
 * This is the Doors 100 rossetta code challenege written in JS
 * Outcome of this code is to pass through 100 doors 100 times, toggling the state at every pass.
 *
 * see link
 * http://rosettacode.org/wiki/100_doors
 *
 */


/**
 *
 * @name Doors100
 * @description Constructor function to init doors
 * @param passes - Number of passes to make
 * @param doors - Number of doors to create
 *
 * */
function Doors100(passes, doors){
  this.doors = [];
  this.passes = passes;

  for(var i = 0; i < doors;i++){
    this.doors.push({
      number:i+1,
      state:'closed'
    })
  }
}


//Runs a set number of passes as specified in the constructor
Doors100.prototype.runPass = function(){
  var callback = function(passNumber, door, index, doors){
    if(door.number % passNumber === 0){
      door.state = door.state ==='closed' ? 'opened' : 'closed'
    }
  };

  for(var i = 0; i < this.passes; i++){
    this.doors.forEach(callback.bind(null, i+1))
  }
};

//print door state
Doors100.prototype.printDoortState = function(door){
  console.log(door.number, 'is', door.state);
};

//print door state stats using ^
Doors100.prototype.getDoorStats = function(){
  this.doors.filter(function(door){
    return door.state === 'opened'
  }).forEach(this.printDoortState);

  this.doors.filter(function(door){
    return door.state === 'closed'
  }).forEach(this.printDoortState);
};

//Usage
var dw100 = new Doors100(1000, 1000);
dw100.runPass();
dw100.getDoorStats();
