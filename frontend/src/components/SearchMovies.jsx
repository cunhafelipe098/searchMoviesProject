import { Movie } from './Movie'
import styles from './SearchMovies.module.css'
import { api } from '../lib/axios'

import {useState } from 'react'

export function SearchMovies() {

    const [movie, setMovie] = useState([])
    const [newMovie, setNewMovie] = useState('')
    
    async function searchMovie() {
        event.preventDefault()
        const response = await api.get(`/movies/:${newMovie}`);
        setMovie(response.data);
    }

    function handleNewMovieChange() {
        event.target.setCustomValidity('')
        setNewMovie(event.target.value)
    }
    function handleNewMovieInvalid () {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    return (
        <div>
            <article className={styles.container}>
                <strong>Search Movie</strong>
                <form onSubmit={searchMovie} className={styles.movieForm}>
                    <input 
                        name="serie"
                        placeholder="Número de série"
                        value={newMovie}
                        onChange={handleNewMovieChange}
                        onInvalid={handleNewMovieInvalid}
                        required
                    />
                    <footer>
                        <button type="submit">Criar</button>
                    </footer>
                </form>
                <Movie
                    key={movie._id}
                    content={movie}
                />                         
            </article>
        </div>
    )
}
