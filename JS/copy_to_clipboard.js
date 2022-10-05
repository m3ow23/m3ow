function generateHash() {
    var userInput = document.getElementById("userInput").value; 

    if (userInput != "") {
        navigator.clipboard.writeText(m3ow_hash(userInput));

        alert("Hash is copied to clipboard!");
        return;
    }

    alert("Please provide an input!");
    return;
}