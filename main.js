let startPoint = document.getElementById("form_start");

function createForm(){

    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php"); 
    document.body.appendChild(form); 
    
    let test = document.createElement("div"); 
    test.innerHTML = "This si the test"; 

    let fullName = document.createElement("input"); 
    fullName.setAttribute("type", "text");  
    fullName.setAttribute("name", "FullName"); 
    fullName.setAttribute("placeholder", "Enter Full Name"); 
    fullName.innerHTML = "TEST"; 
    document.body.appendChild(fullName); 

    let createButton = document.getElementById("create_form_button");
    createButton.innerHTML = "Clicked";

    console.log("did the thing");

}