////////// CLOCK 


let clock = document.getElementById("clock")

function updateClock() {

    const now = new Date();

    let hours = now.getHours() 
const meridian = hours >= 12 ? "PM" : "AM"

hours = hours % 12 || 12

hours = hours.toString().padStart(2, 0)

    const minutes = now.getMinutes().toString().padStart(2, 0)
    const seconds = now.getSeconds().toString().padStart(2, 0)

    const timestring = `${hours}:${minutes}:${seconds} ${meridian}`

    clock.textContent = timestring




}
    

updateClock( )
setInterval(updateClock , 1000)

// ////// WEATHER APP ///////////

const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');

const apiKey = "74197fef51b06110ac0b2b9be581c6ad"

weatherForm.addEventListener ("submit", async event => {

    event.preventDefault();

    const city = cityInput.value ;

    if (city) {
        try{
            const weatherData = await getweatherData(city);
            displayweatherinfo(weatherData);

        }
        catch(error){
            console.error(error)
            displayError(error)
        }

    }else {
        displayError("Please enter a city")
    }

} );


async function getweatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent (city)}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("City not found. Please try again.")
    }
    return await response.json();


}

//////////// DISPLAY WEATHER INFO ////////////

function displayweatherinfo(data) {

    const { name: city,
         main: { temp, humidity },
          weather: [{ id, description }] } = data;


            card.textContent = "";
            card.style.display = "flex";

            const cityDisplay = document.createElement("h1");   
            
            const tempDisplay = document.createElement("p");   
            
            const humidityDisplayy = document.createElement("p");   
            
            const descDisplay = document.createElement("p");   
            
            const weatherEmoji = document.createElement("p");   

            cityDisplay.textContent = city ;
            tempDisplay.textContent = `${temp} °F`
            humidityDisplayy.textContent = `Humidity: ${humidity}%`
            descDisplay.textContent = description;
            weatherEmoji.textContent = getweatherEmoji(id);

            cityDisplay.classList.add("cityDisplay");
            tempDisplay.classList.add("tempDisplay");
            humidityDisplayy.classList.add("humidityDisplay");
            descDisplay.classList.add("descDisplay");
            weatherEmoji.classList.add("weatherEmoji");

            card.appendChild(cityDisplay);
            card.appendChild(tempDisplay);
            card.appendChild(humidityDisplayy);
            card.appendChild(descDisplay);
            card.appendChild(weatherEmoji);

}
///////////// WEATHER EMOJI FUNCTION ////////////

function getweatherEmoji(weatherId) {

    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "⛈️"; // Thunderstorm      
        case weatherId >= 300 && weatherId < 400:
            return "🌧️";
        case weatherId >= 500 && weatherId < 600:
            return "🌧️";
        case weatherId >= 600 && weatherId < 700:
            return "❄️";
        case weatherId >= 700 && weatherId < 800:
            return "🌫️";
        case weatherId === 800:
            return "☀️";
        case weatherId > 801 && weatherId < 900:
            return "☁️";  
        default:
            return "🌈"; // Default emoji for unhandled cases
    }



}

///////// ERROR DISPLAY ////////////

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.append(errorDisplay)
        card.textContent = "Failed to fetch weather data. Please try again!";
        card.style.display = "flex";
        card.style.color = "red";



}


//// To do task

const inputBox = document.getElementById ("input-box")


let listContainer = document.getElementById ("list-container")




function addTask() {
    if (inputBox.value === "") {
        alert("Please input a task!")
    }
     else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
    }


    inputBox.value = "  "
    

}

deleteTask.addEventListener("click", function() {
     
listContainer.remove()


     
})




