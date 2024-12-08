import {ChangeEvent} from 'react';
import classes from './FilterYear.module.scss';

interface FilterYearProps {
  value: string;
  onChange: (value: string) => void;
}

export function FilterYear({value, onChange}: FilterYearProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 26}, (_, i) => 2025 - i);

  return (
    <div className={classes.filterYear}>
      <label htmlFor="year-select" className={classes.label}>
        Release Year
      </label>
      <select
        id="year-select"
        value={value || currentYear.toString()}
        onChange={handleChange}
        className={classes.filterSelect}
      >
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
