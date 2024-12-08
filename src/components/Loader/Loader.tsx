import clsx from 'clsx';
import classes from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export function Loader({className}: LoaderProps) {
  return <div className={clsx(classes.loader, className)}></div>;
}
