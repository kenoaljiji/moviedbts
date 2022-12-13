import Home from './components/home/Home';
import MovieDetails from './components/movieDetails/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './sass/main.scss';

const App = () => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
