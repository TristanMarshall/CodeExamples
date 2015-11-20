var x = 100;

var array = [1, 2, 3, 4, 5];

var dogs = ["Belgium Manlinois",
	        "mutt",
	        "puggle",
	        "french poodle",
	        "Better than cat",
	        "newfie"];

var index;    // undefined

// FOR IN LOOP

for (index in dogs) {
    console.log("my index is..." + index);
    console.log(dogs[index]);
}

// FOR LOOP
for (var breed = 0; breed < dogs.length; breed++) {
    console.log(dogs[breed]);
}


// IF ELSE
function checkValue(value) {

    if (value) {
        return true;
    } else {
        return false;
    }
}
checkValue(10);

// OBJECT

var me = {
	name: 'Tristan Marshall',
	mood: 'Happy',  
	sing: function(){
	    this.mood = 'great';
	    return 'fade to black';
	 }
};

// CONSTRUCTOR

function person(first, last, age, hair) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.hairColor = hair;
}
var me = new person("Tristan", "Marshall", "27", "brown");


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    
  </body>
</html>