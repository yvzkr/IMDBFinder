import classes from './TableGrid.module.scss';
import {Loader} from '../Loader';

export interface TableGridProps<Header = string, T = Record<string, unknown>> {
  headers: Header[];
  rows: T[][];
  loading?: boolean;
}

export function TableGrid<Header = string, T = Record<string, unknown>>({
  headers,
  rows,
  loading,
}: TableGridProps<Header, T>) {
  return (
    <div className={classes.tableGrid}>
      <table className={classes.table}>
        <thead className={classes.tableHeader}>
          <tr className={classes.tableHeaderRow}>
            {headers.map((item, index) => (
              <th
                key={typeof item === 'string' ? item : index}
                className={classes.tableHeaderCell}
              >
                <>{item}</>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading && (
            <tr className={classes.tableBodyRow}>
              <td colSpan={headers.length} className={classes.tableBodyRow}>
                <Loader className={classes.tableBodyRowLoader} />
              </td>
            </tr>
          )}
          {rows.length === 0 && (
            <tr className={classes.tableBodyRow}>
              <td colSpan={headers.length} className={classes.centered}>
                No result
              </td>
            </tr>
          )}
          {rows.map((rowItem, index) => (
            <tr key={index} className={classes.tableBodyRow}>
              {rowItem.slice(0, headers.length).map((item, columnIndex) => (
                <td key={columnIndex} className={classes.tableBodyCell}>
                  <>{item}</>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
