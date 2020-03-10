// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"
var button = document.getElementById("myButton");
//let change = document.getElementsByClassName("box");
let change = document.querySelectorAll('.box')

//button.addEventListener('click', function(){
 //   change[0].style.backgroundColor = 'blue';
 //   console.log(change)
//})

button.addEventListener('click', function(){
    change.forEach(function (el){
        el.style.backgroundColor = 'blue'
    })
    console.log(change)
})