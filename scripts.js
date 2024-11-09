let is24HourFormat = false;
let isCelsius = false;
let temperature = 35;
let isClearView = false;
let browserContent = "google"; // Track current content (google, music, netflix)

function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const options = is24HourFormat ? { hour12: false } : { hour12: true };
    clockElement.textContent = now.toLocaleTimeString([], options);
}

function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
}

function toggleTemperatureUnit() {
    const tempValue = document.getElementById("temp-value");
    const tempUnit = document.getElementById("temp-unit");

    if (isCelsius) {
        temperature = Math.round(temperature * 9 / 5 + 32);
        tempUnit.textContent = "F";
    } else {
        temperature = Math.round((temperature - 32) * 5 / 9);
        tempUnit.textContent = "C";
    }

    tempValue.textContent = temperature;
    isCelsius = !isCelsius;
}

function increaseTemperature() {
    temperature += 1;
    updateTemperatureDisplay();
}

function decreaseTemperature() {
    temperature -= 1;
    updateTemperatureDisplay();
}

function updateTemperatureDisplay() {
    const tempValue = document.getElementById("temp-value");
    tempValue.textContent = temperature;
    document.getElementById("weather").textContent = isCelsius
        ? `Weather: Sunny, ${Math.round((72 - 32) * 5 / 9)}°C`
        : `Weather: Hurricane, 22°F [gift from Biden inc]`;
}

function toggleBrowserContent() {
    const browserImage = document.getElementById("browser-image");

    if (browserContent === "google") {
        browserImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YR48w8RppULt5xGEcA7gLgHaE8%26pid%3DApi&f=1&ipt=240c35027067b42d47b64b0099945913120cf311bb49cedd2e36617677bdb4c7&ipo=images";
        browserContent = "music";
    } else if (browserContent === "music") {
        browserImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3f-gyLPI4fXP7oofglJNXQHaHa%26pid%3DApi&f=1&ipt=290756c28c51da3d93e8203ad5e16e2b324a471e09c05e8005f213949f9d433c&ipo=images";
        browserContent = "netflix";
    } else {
        browserImage.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgoogle%2Fgoogle_PNG102344.png&f=1&nofb=1&ipt=b71b45b3b0cb7ce4043cd60b2b23cb805b7b20f2475728b78e5a26a67a211c7e&ipo=images";
        browserContent = "google";
    }
}

document.getElementById("onBtn").addEventListener("click", () => {
    document.getElementById("content").style.display = "flex";
    document.getElementById("grocery-input").style.display = "block";
});

document.getElementById("offBtn").addEventListener("click", () => {
    document.getElementById("content").style.display = "none";
    document.getElementById("grocery-input").style.display = "none";
});

document.getElementById("addToList").addEventListener("click", () => {
    const itemText = document.getElementById("grocery-item").value.trim();
    if (itemText) {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;
        document.getElementById("list-items").appendChild(listItem);
        document.getElementById("grocery-item").value = "";
    }
});

document.getElementById("toggleTimeFormatBtn").addEventListener("click", toggleTimeFormat);
document.getElementById("temp-value").addEventListener("click", toggleTemperatureUnit);
document.getElementById("increaseTempBtn").addEventListener("click", increaseTemperature);
document.getElementById("decreaseTempBtn").addEventListener("click", decreaseTemperature);
document.getElementById("toggleBrowserContentBtn").addEventListener("click", toggleBrowserContent);

updateClock();
setInterval(updateClock, 1000);
