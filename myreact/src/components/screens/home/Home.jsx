import React, { useMemo } from "react";
import { cars } from './cars.data.js';
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CrateCarForm.jsx";

function Home() {

  // const filtereCars = useMemo(() => cars.filter(car => car.price > 20000), []);  

  return (
    <div>
      <h1>Cars Catalog</h1>
      <CreateCarForm />
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