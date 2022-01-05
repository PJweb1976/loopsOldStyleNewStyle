const colorsArray = ["Yellow", "Blue", "Red", "Orange"];
let i = 0;
while (i < colorsArray.length) {
   console.log(colorsArray[i]);
    i++;
}
for (let i = 0; i < colorsArray.length; i++) {
 console.log(colorsArray[i]);
}
const array1 = ["Yellow", "Blue", "Red", "Orange"];
array1.forEach(element => console.log(element));

// My while loop takes 5 lines
// My for loop takes 3 lines
// My forEach method takes 1 line
// ForEach is easier to read. less i etc.
//
const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
  };
  
  for (x in myColors) {
    console.log(myColors[x]);
  }












