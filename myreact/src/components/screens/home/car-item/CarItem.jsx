import styles from '../Home.module.css'

function CarItem({car}) {
    return (
        <div key={car.id} className={styles.item}>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`
                }} />
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>
                    {new Intl.NumberFormat(
                        `en-Us`, {
                        style: "currency",
                        currency: "EUR",
                    }).format(car.price)}
                </p>
                <button>Read More</button>
            </div>
        </div>
    );
}

export default CarItem;