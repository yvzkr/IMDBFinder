import clsx from 'clsx';
import classes from './SplashScreen.module.scss';
import {Loader} from '../Loader';

export interface SplashScreenProps {
  grow?: boolean;
}

export function SplashScreen({grow}: SplashScreenProps) {
  return (
    <div
      className={clsx(classes.splashScreen, {
        [classes.splashScreenGrow]: grow,
      })}
    >
      <Loader />
    </div>
  );
}
