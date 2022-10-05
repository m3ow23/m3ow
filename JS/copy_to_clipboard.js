function generateHash() {
    var userInput = document.getElementById("userInput").value; 

    if (userInput != "") {
        navigator.clipboard.writeText(m3ow_hash(userInput));

        
        alert(m3ow_hash(userInput));
        return;
    }

    alert("Please provide an input!");
    return;
}