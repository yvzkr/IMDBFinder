import {ApiKeyModal} from './components/ApiKeyModal/ApiKeyModal';
import {Router} from './Router';
import {useApiKey} from './hooks';

function App() {
  const {isModalOpen} = useApiKey();

  return (
    <>
      {isModalOpen && <ApiKeyModal />}
      <Router />
    </>
  );
}

export default App;
