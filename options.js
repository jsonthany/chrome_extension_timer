const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", () => {
    const name = nameInput.value;

    chrome.storage.sync.set({
        name,
    }, () => {
        console.log(`Name is: ${name}`)
    })
})

chrome.storage.sync.get(["name"], (res) => {
    nameInput.value = res.name;
    console.log(res)
})