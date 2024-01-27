
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home/home';
import Header from './components/header/header';
import Movie from './pages/movieDetail/movie';
import MovieList from './components/movieList/movieList';
function App() {
  return (
    <div className="App">
      <Router>
    <Header/>
        <Routes>
        <Route path='/' element={< Home />}> </Route>
        <Route path='movie/:id' element={<Movie />}> </Route>
        <Route path='movies/:type' element={<MovieList />}> </Route>
        <Route path='/*' element={<h1>Error Page!</h1>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
