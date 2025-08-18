async function getdata(city) {
    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa495f8559206d5e2b64760f4d1d3775`)
        const jsonData = await data.json()
        console.log(jsonData)
        const weatherData = {
        cityName: jsonData.name,
        temperature: jsonData.main.temp,
        cityHumidity: jsonData.main.humidity,
        windSpeed: jsonData.wind.speed,
        icons: jsonData.weather[0].icon,
    };
    return weatherData

    } catch (error) {
         alert("Could'nt Fetch Data");

        return {
      temperature: "N/A",
      cityHumidity: "N/A",
      windSpeed: "N/A",
      icons: null,
      error: true,
    };
        
    }
      
    }


export default getdata