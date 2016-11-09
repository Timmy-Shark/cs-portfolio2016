// The code gives the elements their name and Id
var text = document.getElementById("text");
var button = document.getElementById("button");
var tasks = document.getElementById("tasks");

// The code gives the function it's name and HTML 
button.addEventListener("click", function() {
    
    tasks.innerHTML+='<div>' + text.value +'</div>'
})
    
// The code gives the function it's name and evt
tasks.addEventListener("click", function(evt) {

    evt.target.parentNode.removeChild(evt.target);

})