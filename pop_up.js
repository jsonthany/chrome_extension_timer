const timeElement = document.getElementById("time")
const nameElement = document.getElementById("name")
const timerElement = document.getElementById("timer")

const updateTimeElements = () => {
    chrome.storage.local.get(["timer"], (res) => {
        const time = res.timer ?? 0
        timerElement.textContent = `The timer is at: ${time} seconds.`
    })
    
    const currentTime = new Date().toLocaleTimeString()
    timeElement.textContent = `The time is: ${currentTime}`
}

updateTimeElements();
setInterval(updateTimeElements, 1000);

chrome.storage.sync.get(["name"], (res) => {
    const name = res.name ?? "???"
    nameElement.textContent = `Your name is: ${name}`
})

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: true,
    })
})

stopButton.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: false,
    })
})

resetButton.addEventListener("click", () => {
    chrome.storage.local.set({
        timer: 0,
        isRunning: false,
    })
})


// const currentTime = new Date().toLocaleTimeString()
// timeElement.textContent = `The time is: ${currentTime}`

// chrome.action.setBadgeText({
//     text: "TIME",
// }, () => {
//     console.log("Finished setting badge text.")
// })