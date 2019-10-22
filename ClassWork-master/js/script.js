//palindrome

document.getElementById('palindrome').addEventListener('click', function(){

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
document.getElementById('result').innerHTML = " ";
var givenString = prompt("Enter a string");
document.getElementById('result').innerHTML = '</br> The given string is ' + givenString
+ '</br> </br> The reversed string is ' + reverseString(givenString);

if (givenString.toLowerCase() === reverseString(givenString).toLowerCase()){
  document.getElementById('result').innerHTML += '</br> </br>The given string is palindrome';

} else {
  document.getElementById('result').innerHTML += '</br> </br> The given string is not palindrome </br>';
}
});

//even or Odd
document.getElementById('evenorodd').addEventListener('click', function(){
  document.getElementById('result').innerHTML = " ";

 var x = parseInt(prompt("Enter a number"));
 console.log (x%2);

 if (x%2 === 0) {
   document.getElementById('result').innerHTML = '</br> </br> The given number ' + x + ' is even';
 } else {
   document.getElementById('result').innerHTML = '</br> </br> The given number ' + x + ' is odd';
 }

});

//replace words
document.getElementById('replaceWords').addEventListener('click', function(){

 var sentence = "The good news is that everyone makes mistakes. All of the mistakes you make,have been made by others who started off just like you.";

 var  replacedSentence = sentence.replace(/mistakes/g, "bugs");
 document.getElementById('result').innerHTML = '</br> <div class="text-primary"> The original passage is below </div>' ;
 document.getElementById('result').innerHTML += '</br> ' + sentence;
 document.getElementById('result').innerHTML += '</br> </br> <div class="text-primary"> The replaced passage is below </div>' ;
 document.getElementById('result').innerHTML += '</br>  ' + replacedSentence;

});

//arrays
//add to array
document.getElementById('add').addEventListener('click', function(){
  document.getElementById('result').innerHTML = " ";

  var fruits = ["APPLE", "ORANGE", "KIWI"];
  var basket = ["BLUE BERRY", "RASP BERRY", "BLACK BERRY", "CRANBERRY"]
  var userFruit = (document.getElementById('fruit').value).toUpperCase();
  console.log(userFruit);
  console.log(fruits.includes(userFruit)=== false);
  if (fruits.includes(userFruit) === false)   {
    if (basket.includes(userFruit) === true) {
    fruits.push(userFruit);
    document.getElementById('result').innerHTML = '</br> </br> Your fruit is added. The new array is ' + fruits;
  } else {
    document.getElementById('result').innerHTML = '</br> </br> The fruit you entered is not in the basket';
  }
  } else {
    document.getElementById('result').innerHTML = '</br> </br> The fruit you entered exists already. Please give another fruit';
  }
document.getElementById('fruit').value = " ";
});


//delete from arrays
document.getElementById('delete').addEventListener('click', function(){
  document.getElementById('result').innerHTML = " ";

  var fruits = ["APPLE", "ORANGE", "KIWI"];

  var userFruit = (document.getElementById('fruit').value).toUpperCase();
  console.log(userFruit);

  for (var i=0; i<fruits.length; i++){

    if (fruits[i] === userFruit){

      delete fruits[i];
      document.getElementById('result').innerHTML = '</br> </br> The new array is ' + fruits;
    }


  }

});

//search
document.getElementById('search').addEventListener('click', function(){
  document.getElementById('result').innerHTML = " ";

  var fruits = ["APPLE", "ORANGE", "KIWI"];

  var userFruit = (document.getElementById('fruit').value).toUpperCase();
  console.log(userFruit);

  for (var i=0; i<fruits.length; i++){

    if (fruits[i] === userFruit){

      document.getElementById('result').innerHTML += '</br> </br> ' + userFruit + ' is found in the array.' + fruits;
      break;
    }


  }
   if (fruits.includes(userFruit) === false) {
    document.getElementById('result').innerHTML += '</br> </br> ' + userFruit + ' is not found in the array.' + fruits;
   }
   document.getElementById('fruit').value = " ";
});

//Sort
document.getElementById('sort').addEventListener('click', function(){
  document.getElementById('result').innerHTML = " ";
  document.getElementById('fruit').value = " ";
  var fruits = ["APPLE", "ORANGE", "KIWI"];

    fruits.sort();
    fruits.reverse();
    document.getElementById('result').innerHTML += '</br> </br> The sorted array is : ' + fruits;
    document.getElementById('fruit').value = " ";
});
