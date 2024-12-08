import {Skeleton} from '../Skeleton/Skeleton';
import classes from './TableGrid.module.scss';

interface TableGridSkeletonProps {
  columns: number;
  rows?: number;
}

export function TableGridSkeleton({
  columns = 4,
  rows = 5,
}: TableGridSkeletonProps) {
  return (
    <div className={classes.tableGrid}>
      <table className={classes.table}>
        <thead className={classes.tableHeader}>
          <tr className={classes.tableHeaderRow}>
            {Array.from({length: columns}).map((_, index) => (
              <th key={index} className={classes.tableHeaderCell}>
                <Skeleton height={20} />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({length: rows}).map((_, rowIndex) => (
            <tr key={rowIndex} className={classes.tableBodyRow}>
              {Array.from({length: columns}).map((_, colIndex) => (
                <td key={colIndex} className={classes.tableBodyCell}>
                  <Skeleton height={20} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
