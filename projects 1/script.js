const bg = document.querySelector('.bg');
const btn = document.querySelector('.change');
const toggleText = document.querySelector('.toggleText');

// const colors = ["blue", "green", "pink", "yellow", "purple"]

// btn.addEventListener('click', function() {
//    const randomNumber =  togggleColor()
//    console.log(randomNumber)
//     bg.style.backgroundColor =  colors[randomNumber]
//     console.log(colors)
//     toggleText.innerText = `Color changes to ${colors[randomNumber]}`
// })

// function togggleColor() {
//    return Math.floor(Math.random() * colors.length)
// }

const hexColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

btn.addEventListener("click", function(){
   let hex = "#";

   for (let i = 0; i < 6; i++) {
      hex += hexColors[togggleColor()];

   }
   console.log(hex)
       bg.style.backgroundColor =  hex
       console.log(hex)
       toggleText.innerText = `Color changes to ${hex}`
       btn.style.color =  hex
})

function togggleColor() {
    return Math.floor(Math.random() * hexColors.length)
   }