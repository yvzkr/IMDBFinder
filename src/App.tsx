import loadable from '@loadable/component';
import {Navigate, Route, Routes} from 'react-router-dom';
import {FC} from 'react';

const Movies = loadable<FC>(
  () => import('./pages/Movies/Movies')
) as unknown as FC;
const MovieDetail = loadable<FC>(
  () => import('./pages/MoviesDetail/MoviesDetail')
) as unknown as FC;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies" replace={true} />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
