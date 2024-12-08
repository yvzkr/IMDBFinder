import {Skeleton} from '../../../components/Skeleton/Skeleton';
import classes from '../MediaDetail.module.scss';

export function MediaDetailSkeleton() {
  return (
    <div className={classes.container}>
      <Skeleton width={120} height={40} className={classes.backButton} />

      <div className={classes.content}>
        <div className={classes.posterWrapper}>
          <Skeleton width="100%" height={450} />
        </div>

        <div className={classes.info}>
          {/* Title */}
          <Skeleton width="70%" height={36} className={classes.titleSkeleton} />

          {/* Meta info */}
          <div className={classes.meta}>
            <Skeleton width={60} height={20} />
            <Skeleton width={80} height={20} />
            <Skeleton width={100} height={20} />
          </div>

          {/* Plot */}
          <div className={classes.plot}>
            <Skeleton width="100%" height={100} />
          </div>

          {/* Details grid */}
          <div className={classes.details}>
            {Array.from({length: 6}).map((_, index) => (
              <div key={index} className={classes.detailItem}>
                <Skeleton
                  width={80}
                  height={20}
                  className={classes.detailTitle}
                />
                <Skeleton width="100%" height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
