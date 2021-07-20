import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img className={styles.movieImage}
                    width={230}
                    height={345}
                    src={imageUrl}
                    alt={movie.title}
                />
                <div>
                    {movie.title}
                </div>
            </Link>
        </li>
    );
}

export default MovieCard;
