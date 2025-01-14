import getData from "./utils/apiUtils.js";
import apiKey from "./utils/ApiKey.js";

const button = document.getElementById('getPlayerData');
const nextButton = document.getElementById('nextButton');
const secondSearchBox = document.getElementById('secondSearchBox');
const usernameInput = document.getElementById('usernameInput');
const playerInfoElement = document.getElementById('playerInfo');

nextButton.addEventListener('click', () => {
    secondSearchBox.style.display = 'block';
});

// Add event listener for the "Get Player Data" button
button.addEventListener('click', () => {
    console.log('Button clicked');
    const username = usernameInput.value.trim(); 
    getPlayerData(username);
});

async function getPlayerData(username) {
    // If the username is empty, alert the user
    if (!username) {
        alert("Please enter a Minecraft username.");
        return;
    }

    console.log("Fetching data for username:", username);

    try {
        // Fetch player data
        const response = await getData('player', apiKey, username);
        console.log("API response:", response); // Log the response to check its structure

        if (!response || !response.success) {
            throw new Error('Network response was not ok');
        }

        const data = response;

        if (data && data.player) {
            const player = data.player;
            const playerName = player.displayname || "N/A";
            const playerUUID = player.uuid || "N/A";
            const Garden = Garden.json();

            playerInfoElement.textContent = `Player Name: ${playerName}\nUUID: ${playerUUID}\nGarden Data: ${Garden}`;

        } else {
            playerInfoElement.textContent = "Error: Unable to fetch player data.";
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        playerInfoElement.textContent = `Error fetching data: ${error.message}`;
    }
}
