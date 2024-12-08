import {useEffect, useState, useCallback} from 'react';
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

  // Debounce fonksiyonu ile onChange'i sarmalayın
  const debouncedOnChange = useCallback(
    debounce((value: string) => {
      if (searchTerm === value) return;
      onChange(value);
    }, 300),
    [onChange]
  ); // onChange bağımlılığı eklendi

  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  useEffect(() => {
    debouncedOnChange(searchTerm); // Debounced onChange'i çağır
    return debouncedOnChange.cancel; // Temizleme fonksiyonu
  }, [searchTerm]);

  return (
    <div className={classes.filterTitle}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="At least 3 characters..."
        className={classes.filterInput}
      />
    </div>
  );
}
