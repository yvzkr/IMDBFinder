import {useParams} from 'react-router-dom';

function MoviesDetail() {
  const {id} = useParams();
  return <div>MoviesDetail {id} </div>;
}

export default MoviesDetail;
