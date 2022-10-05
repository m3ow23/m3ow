function generateHash() {
    var userInput = document.getElementById("userInput").value; 

    if (!navigator.clipboard)
        alert('Clipboard API is not available');

    if (userInput != "") {
        navigator.clipboard.writeText(m3ow_hash(userInput));

        alert("Hash is copied to clipboard!");
        return;
    }

    alert("Please provide an input!");
    return;
}