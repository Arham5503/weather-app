import { useEffect, useState } from "react";
import "./App.css";
import sky from "./assets/clear-sky.png";
import waves from "./assets/waves.png";
import wind from "./assets/wind.png";
import getdata from "./customHook/hook";

function App() {
  const [city, setCity] = useState("lahore");
  const [weather, setWeather] = useState("");
  useEffect(() => {
    async function handler(city) {
      const data = await getdata(city);
      setWeather(data);
    }
    handler(city);
  }, [city]);
  return (
    <>
      <main className="flex justify-center items-center h-dvh bg-[url('./assets/sky.jpg')] bg-cover bg-center ">
        <section className=" w-96 p-5 rounded-xl bg-linear-65 from-purple-500 to-pink-500">
          <div className="flex gap-2.5 justify-center">
            <input
              id="city"
              className="w-52 bg-white p-1 rounded-md"
              type="text"
              placeholder="Enter City"
            />
            <button
              className="w-24 bg-emerald-600 rounded-md cursor-pointer text-white "
              onClick={() => {
                let input = document.getElementById("city").value;
                if (input != "") {
                  setCity(input);
                } else {
                  alert("Enter City Name Please");
                }
              }}
            >
              Search
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-3.5 p-1.5 my-2.5 text-white">
            <img
              className="w-36"
              src={`https://openweathermap.org/img/wn/${weather.icons}@2x.png`}
              alt=""
            />
            <h1 className="text-5xl font-medium">
              {Math.round(weather.temperature)} °C
            </h1>
            <h1 className="text-4xl font-medium">{weather.cityName}</h1>
          </div>
          <div className="flex justify-between text-white">
            <div className="flex gap-2 justify-center items-center">
              <img className="w-9 h-9 invert-100" src={waves} alt="" />
              <div>
                <h1>{weather.cityHumidity}%</h1>
                <h1>Hummadity</h1>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center text-white">
              <img className="w-9 h-9 invert-100" src={wind} alt="" />
              <div>
                <h1>{weather.windSpeed} Km/h</h1>
                <h1>Wind Speed</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
