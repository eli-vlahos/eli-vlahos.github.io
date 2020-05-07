
function validation(){
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";
    

    var text;
    if(name.length > 20 || name.length < 5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    
    if(message.length > 200 || message.length <1){
        text = "Please enter shorter message";
        error_message.innerHTML = text;
        return false;
    }
    
    alert("Form Submitted Successfully!");

    return true;
    
    
    
}

