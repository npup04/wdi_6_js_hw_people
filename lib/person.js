//Create Person w/ constructor functions
var Person = function(firstName, lastName, age, weight, height, isFriend, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  //this.age = (age === null)? 30 : age;

  this.weight = weight;
  this.isFriend = isFriend;
  this.friends = friends;
}; //end var Person

Person.prototype = {
  fullName: function(){
    return "full name is: " + this.firstName + " " + this.lastName;
  },
  weightInStone: function(pounds){
    this.weight = pounds * 14;
    return "weight in stone is: "  + this.weight;
  },
  addFriend: function(add_person){
  },
  removeFriend: function(remove_person){
  },
  greetPeople: function(new_person){
  }
}; //end Person.prototype

//Create instances
var barackObama = new Person('Barack', 'Obama', 45, 180, 70, true);
var michelleObama = new Person('Michelle', 'Obama', 43, 140, 67, true);
var johnnyCash = new Person('Johnny', 'Cash', 75, 175, 69, false);
var sherlockHolmes = new Person('Sherlock', 'Holmes', 55, 180, 72, true, [barackObama, michelleObama]);

// console.log(barackObama.age);
// console.log(barackObama.fullName());
// console.log(barackObama.weightInStone(50));

// add johnnyCash
console.log(sherlockHolmes.friends);
console.log(sherlockHolmes.friends.push(johnnyCash));
console.log(sherlockHolmes.friends);

// remove johnnyCash
console.log(sherlockHolmes.friends.unshift(johnnyCash));
console.log(sherlockHolmes.friends);
