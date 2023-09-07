import React from 'react';
import styles from '../create-car-form/CreateCarForm.module.css'

const CreateCarForm = () => {
    return (
        <form className={styles.form}>
            <input type="text" placeholder='Name' />
        </form>
    )
}

export default CreateCarForm
