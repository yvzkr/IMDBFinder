import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setApiKey, setModalOpen} from '../../store/slices/apiKey.slice';
import classes from './ApiKeyModal.module.scss';
import {useApiKey} from '../../hooks';
import clsx from 'clsx';

export function ApiKeyModal() {
  const [apiKeyInput, setApiKeyInput] = useState('');
  const dispatch = useDispatch();
  const {apiKey} = useApiKey();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKeyInput.trim()) {
      dispatch(setApiKey(apiKeyInput.trim()));
    }
  };

  const handleClose = () => {
    dispatch(setModalOpen(false));
  };

  useEffect(() => {
    if (apiKey) {
      setApiKeyInput(apiKey);
    }
  }, [apiKey]);

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <h2>Enter OMDB API Key</h2>
        <p>Please enter your OMDB API key to use this application.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={apiKeyInput}
            onChange={e => setApiKeyInput(e.target.value)}
            placeholder="Enter your API key"
            className={classes.input}
          />
          <button
            type="submit"
            className={classes.button}
            disabled={!apiKeyInput.trim()}
          >
            Save
          </button>
          <button
            type="button"
            className={clsx(classes.button, classes.closeButton)}
            onClick={handleClose}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
