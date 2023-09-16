import React, { useEffect, useState } from "react";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CrateCarForm.jsx";
import { CarService } from "../../../services/car.service";

function Home() {
  const [cars, SetCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll();

      SetCars(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cars Catalog</h1>
      <CreateCarForm setCars={SetCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>Cars not found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
