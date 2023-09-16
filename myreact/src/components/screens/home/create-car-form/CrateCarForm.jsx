import React, { useState } from 'react';
import styles from '../create-car-form/CreateCarForm.module.css'
import { cars } from '../cars.data';


const clearData = {
    price: '',
    name: '',
    image: '',
};

const CreateCarForm = ({ setCars }) => {

    const [data, setData] = useState({
        price: '',
        name: '',
        image: '',
    });

    const createCar = e => {
        e.preventDefault()
        // console.log({ name, price, image });
        setCars(prev => [{
            id: prev.lenght + 1,
            ...data,
        },
        ...prev])

        setData(clearData);
        console.log(cars);
    }

    return (
        <form className={styles.form}>
            <input
                placeholder='Name'
                onChange={e => setData(prev => ({
                    ...prev, name: e.target.value,
                }))}
                value={data.name} />
            <input
                placeholder='Price'
                onChange={e => setData(prev => ({
                    ...prev, price: e.target.value,
                }))}
                value={data.price} />
            <input
                placeholder='Image'
                onChange={e => setData(prev => ({
                    ...prev, image: e.target.value,
                }))}
                value={data.image} />

            <button className='btn' onClick={e => createCar(e)}>Creacte</button>
        </form>
    )
}

export default CreateCarForm
