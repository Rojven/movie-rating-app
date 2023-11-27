import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './pages/auth'
import Home from './pages/home'
import './App.css'
import Movie from './pages/movie'
import TvShow from './pages/tvshow'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/rated' element={<h1>Rated</h1>} />
            <Route path='/movie/:id' element={<Movie/>}/>
            <Route path='/tvshow/:id' element={<TvShow/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App