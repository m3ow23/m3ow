function generateHash() {
    var userInput = document.getElementById("userInput"); 

    if (userInput == "") {
        alert("Please provide an input!");
        return;
    }

    if (!navigator.clipboard) {
        alert('Clipboard API is not available');
        return;
    }

    userInput.select();
    userInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(m3ow_hash(userInput.value));
    alert('Hash is copied to clipboard!');
    return;
}