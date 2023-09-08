import React, { useState } from 'react';
import styles from '../create-car-form/CreateCarForm.module.css'

const CreateCarForm = () => {

    const [name, setName] = useState('');

    const cteateCar = () => {
        console.log(name);
    }

    return (
        <form className={styles.form}>
            <input type="text"
                placeholder='Name'
                onChange={e => setName(e.target.value)}
                value={name} />
                <input type="text"
                placeholder='Name'
                onChange={e => setName(e.target.value)}
                value={name} />
                <input type="text"
                placeholder='Name'
                onChange={e => setName(e.target.value)}
                value={name} />
        </form>
    )
}

export default CreateCarForm
