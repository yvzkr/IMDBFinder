import {Routes, Route, Navigate} from 'react-router-dom';
import loadable from '@loadable/component';
import {FC} from 'react';

const MediaList = loadable<FC>(
  () => import('./pages/MediaList/MediaList')
) as unknown as FC;

const MediaDetail = loadable<FC>(
  () => import('./pages/MediaDetail/MediaDetail')
) as unknown as FC;

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/search" replace={true} />} />
      <Route path="/search" element={<MediaList />} />
      <Route path="/:id" element={<MediaDetail />} />
    </Routes>
  );
}
