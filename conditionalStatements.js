var number1 = prompt('Enter a number:');
var number2 = prompt('Enter another number:');

if (number1 < number2) {
  alert(number1 + ' less than ' + number2);
} else if (number1 == number2) {
	alert(number1 + ' is equal to ' + number2);				 
} else {
  alert(number1 + ' more than ' + number2);
}

var age = prompt('Hello! How old are you?');

if (age < 18) {
  alert("This article is only available for people over 18 years of age.");
} else if (age == 18) {
	alert("Exactly 18 years old? Congratulations, welcome to adults! Have fun with the article! ");
} else {
  alert("Thank you! You can read this article.");
}

for (var i = 1; i <= 20; i++) {
  console.log(i + ' is a number.')
}

console.log(' ');

for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i + ' is an odd number.');
  } else if (i == 10) {
	  console.log(i + '  is the most beautiful even number.');
  } else {
    console.log(i + ' is a even number.');
  }
}

console.log(' ');

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log(i + ' cat');
  } else if (i % 5 == 0) {
	  console.log(i + ' dog');
  } else {
    console.log(i);
  }
}