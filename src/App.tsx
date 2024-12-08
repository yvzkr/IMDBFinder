import loadable from '@loadable/component';
import {Navigate, Route, Routes} from 'react-router-dom';
import {FC} from 'react';

const MediaList = loadable<FC>(
  () => import('./pages/MediaList/MediaList')
) as unknown as FC;

const MediaDetail = loadable<FC>(
  () => import('./pages/MediaDetail/MediaDetail')
) as unknown as FC;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/search" replace={true} />} />
      <Route path="/search" element={<MediaList />} />
      <Route path="/:id" element={<MediaDetail />} />
    </Routes>
  );
}

export default App;
