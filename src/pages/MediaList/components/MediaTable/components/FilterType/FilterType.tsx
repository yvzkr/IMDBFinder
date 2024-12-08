import {ChangeEvent} from 'react';
import classes from './FilterType.module.scss';

interface FilterTypeProps {
  value: string;
  onChange: (value: string) => void;
}

export function FilterType({value, onChange}: FilterTypeProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={classes.filterType}>
      <label htmlFor="type-select" className={classes.label}>
        Media Type
      </label>
      <select
        id="type-select"
        value={value}
        onChange={handleChange}
        className={classes.filterSelect}
      >
        <option value="">All Types</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    </div>
  );
}
