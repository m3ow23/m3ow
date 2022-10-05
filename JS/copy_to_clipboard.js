function generateHash() {
    var userInput = document.getElementById("userInput"); 

    if (userInput.value == "") {
        alert("Please provide an input!");
        userInput.select();
        userInput.setSelectionRange(0, 99999);
        return;
    }
    if (userInput.value.length > 62) {
        alert("Input limit is 62 characters!");
        userInput.value = "";
        return;
    }
    if (!navigator.clipboard) {
        alert('Clipboard API is not available!');
        location.reload()
        return;
    }

    userInput.select();
    userInput.setSelectionRange(0, 99999);
    navigator.clipboard
        .writeText(m3ow_hash(userInput.value))
        .then(() => {
            alert("Hash is copied to clipboard.");
        })
        .catch(() => {
            alert("An Error went wrong!");
        });
    return;
}