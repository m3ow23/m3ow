function generateHash () {
    var userInput = document.getElementById("userInput").value; 

    if (userInput != "") {
        copyToClipBoard(m3ow_hash(userInput));
        return;
    }

    alert("Please provide an input!");
    return;
}

function copyToClipBoard (hash) {
    navigator.clipboard.writeText(hash);

    alert("Hash is copied to clipboard!");
    return;
}