import React, { useState } from "react";
// import { cars as carsData } from './cars.data.js';
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CrateCarForm.jsx";
// import axios from "axios";
// import { CarService } from "../../../services/car.service.js";

function Home() {

  const [cars, setCars] = useState();

  return (
    <div>
      
      <h1>Cars Catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (cars.map(car =>
          <CarItem key={car.id} car={car} />)
        ) : (
          <p>Cars not found</p>
        )}
      </div>
    </div>
  );
}

export default Home;