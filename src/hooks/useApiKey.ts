import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

export function useApiKey() {
  const {key, isModalOpen} = useSelector((state: RootState) => state.apiKey);
  return {apiKey: key, isModalOpen};
}
