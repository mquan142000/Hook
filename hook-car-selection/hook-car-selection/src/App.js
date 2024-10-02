import React, { useState } from 'react';

const carList = ['Toyota', 'Honda', 'BMW'];
const colorList = ['Red', 'Blue', 'Green'];

function App() {
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0]
  });

  const handleCarChange = (event) => {
    const newCar = event.target.value;
    setSelectedCar((previousState) => {
      return { ...previousState, car: newCar };  
    });
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedCar((previousState) => {
      return { ...previousState, color: newColor };
    });
  };

  return (
    <div className="App">
      <h1>Select your car</h1>
      <div>
        <label htmlFor="carSelect">Select a car{" "}</label>
        <select id="carSelect" value={selectedCar.car} onChange={handleCarChange}>
          {carList.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>
      <br></br>
      <div>
        <label htmlFor="colorSelect">Select a color{" "}</label>
        <select id="colorSelect" value={selectedCar.color} onChange={handleColorChange}>
          {colorList.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>You select a {selectedCar.color} - {selectedCar.car}</h2>
      </div>
    </div>
  );
}

export default App;
