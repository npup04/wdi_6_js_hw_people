//Create Person w/ constructor functions
var Person = function(firstName, lastName, age, weight, height, isFriend){
  this.firstName = firstName;
  this.lastName = lastName;

  this.age = (age === null)? 30 : age;

  this.weight = weight;
  this.isFriend = isFriend;
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
var helenT = new Person('Helen', 'Thi', 29, 115, 63, true);
var sHolmes = new Person('Sherlock', 'Holmes', 55, 180, 72, false);


console.log(barackObama.age);
console.log(barackObama.fullName());
console.log(barackObama.weightInStone(50));

