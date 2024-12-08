import {useParams} from 'react-router-dom';

function MediaDetail() {
  const {id} = useParams();

  return <div>MediaDetail {id} </div>;
}

export default MediaDetail;
