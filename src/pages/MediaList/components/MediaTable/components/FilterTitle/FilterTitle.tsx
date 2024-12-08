import {useEffect, useState} from 'react';
import classes from './FilterTitle.module.scss';
import {debounce} from 'lodash';

interface FilterTitleProps {
  value: string;
  onChange: (value: string) => void;
}

export function FilterTitle({value, onChange}: FilterTitleProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchTerm === e.target.value) return;
    setSearchTerm(e.target.value);
  };

  const debouncedOnChange = debounce((value: string) => {
    onChange(value);
  }, 300);

  useEffect(() => {
    setSearchTerm(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    debouncedOnChange(searchTerm);
    return () => {
      debouncedOnChange.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className={classes.filterTitle}>
      <label htmlFor="title-search" className={classes.label}>
        Search Title
      </label>
      <input
        id="title-search"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="At least 3 characters..."
        className={classes.filterInput}
      />
    </div>
  );
}
