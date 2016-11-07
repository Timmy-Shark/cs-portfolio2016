// Creates Varables and saves DOM Elements to each
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

/*  EventListener for button.
    Sets the body's background color to the user provided value */
colorChangeButton.addEventListener("click", function(){
    
    document.body.style.backgroundColor = newBGColor.value;

    
    
})

