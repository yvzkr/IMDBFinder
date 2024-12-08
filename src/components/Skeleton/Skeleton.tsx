import classes from './Skeleton.module.scss';
import clsx from 'clsx';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

export function Skeleton({
  width,
  height,
  className,
  variant = 'rectangular',
}: SkeletonProps) {
  return (
    <div
      className={clsx(classes.skeleton, classes[variant], className)}
      style={{width, height}}
    />
  );
}
