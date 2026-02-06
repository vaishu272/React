import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState({ count: 0, theme: "blue" });

  const count = state.count;
  const theme = state.theme;

  const [country, setCountry] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("");

  const countryList = ["India", "USA", "Canada", "Australia"];

  const stateList = {
    India: ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi"],
    USA: ["California", "Texas", "New York", "Florida"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    Australia: ["New South Wales", "Victoria", "Queensland"],
  };

  const cityList = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    Delhi: ["New Delhi", "Dwarka", "Rohini"],

    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
    "New York": ["New York City", "Buffalo", "Albany"],
    Florida: ["Miami", "Orlando", "Tampa"],

    Ontario: ["Toronto", "Ottawa", "Mississauga"],
    Quebec: ["Montreal", "Quebec City", "Laval"],
    "British Columbia": ["Vancouver", "Victoria", "Surrey"],

    "New South Wales": ["Sydney", "Newcastle", "Wollongong"],
    Victoria: ["Melbourne", "Geelong", "Ballarat"],
    Queensland: ["Brisbane", "Gold Coast", "Cairns"],
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setStateName("");
    setCity("");
  };

  const handleStateChange = (e) => {
    setStateName(e.target.value);
    setCity("");
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="min-h-[70vh] flex flex-col lg:flex-row items-center justify-center gap-8 px-4">
      {/* Counter Card */}
      <div className="rounded-xl p-8 w-full max-w-sm text-center border shadow">
        <h1 className="text-2xl font-bold mb-6">useState Counter</h1>

        <div className="text-5xl font-bold mb-4">{count}</div>

        <div className="text-xl font-semibold mb-6">{theme}</div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={() => setState({ ...state, count: count - 1 })}
            className="flex-1 cursor-pointer bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            −
          </button>

          <button
            onClick={() => setState({ ...state, count: count + 1 })}
            className="flex-1 cursor-pointer bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            +
          </button>

          <button
            onClick={() => setState({ ...state, count: count + 5 })}
            className="flex-1 cursor-pointer bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            +5
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Click buttons to update state
        </p>
      </div>

      {/* Dependent Dropdown */}
      <div className="flex items-center justify-center w-full">
        <div className="rounded-xl p-8 w-full max-w-xl text-center border shadow">
          <h1 className="text-2xl font-bold mb-6">
            Dependent Dropdown Example
          </h1>

          <div className="flex flex-col gap-4">
            <select
              value={country}
              onChange={handleCountryChange}
              className="border cursor-pointer px-4 py-2 rounded"
            >
              <option value="" disabled>
                Select Country
              </option>
              {countryList.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={stateName}
              onChange={handleStateChange}
              className="border cursor-pointer px-4 py-2 rounded"
              disabled={!country}
            >
              <option value="" disabled>
                Select State
              </option>
              {country &&
                stateList[country].map((s, index) => (
                  <option key={index} value={s}>
                    {s}
                  </option>
                ))}
            </select>

            <select
              value={city}
              onChange={handleCityChange}
              className="border cursor-pointer px-4 py-2 rounded"
              disabled={!stateName}
            >
              <option value="" disabled>
                Select City
              </option>
              {stateName &&
                cityList[stateName].map((c, index) => (
                  <option key={index} value={c}>
                    {c}
                  </option>
                ))}
            </select>

            <div className="mt-4 space-y-1">
              <p>Country: {country}</p>
              <p>State: {stateName}</p>
              <p>City: {city}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseState;
