import { Header } from './components/Header'
import { SearchMovies }   from './components/SearchMovies'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SearchMovies/>
      </div>
    </>
    
  )
}

export default App
