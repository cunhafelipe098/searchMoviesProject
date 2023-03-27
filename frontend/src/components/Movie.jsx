import styles from './Movie.module.css'

export function Movie ({content}) {
    return content.title ? (
        <div className={styles.movie}>
            
            <div className={styles.movieDescription}>
                <h1>{content.title}</h1>
                <p>{content.plot}</p>
                <p><strong>Actor </strong>{content.actors}</p>
                <p><strong>Review </strong>{content.rating}</p>
            </div>
            <img src={content.poster} alt="Minha Figura"/>
        </div>
    ) : (<></>);
} 