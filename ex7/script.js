// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

let clickableHeader = document.getElementById('section-header');

clickableHeader.addEventListener('click', function () {
  var content = document.getElementById('section');
  if(content.style.display !== 'none'){
    console.log (content.style.display)
    content.style.display = 'none';
}
   
  else{
    console.log (content.style.display)
    content.style.display = 'block';
  }
  
});


