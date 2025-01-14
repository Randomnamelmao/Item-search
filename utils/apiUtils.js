//apiUtils.js
/**
 * This function retrieves data from an endpoint of the Hypixel API
 * @param endpoint: The endpoint of the API that you're requesting to
 * @param apiKey: The api key
 * @param username: The username which you are retrieving data from
 * @returns data in json format
 */

export default async function getData(endpoint, apiKey, username) {
    try {
        
        const fetchEndpoint = `https://api.hypixel.net/v2/${endpoint}?key=${apiKey}&name=${username}`;
        const response = await fetch(fetchEndpoint);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return { error: `Failed retrieving data. Status code: ${response.status}` };
        }
    } catch (error) {
        return { error: `Error :( ${error.message}` };
    }
}
