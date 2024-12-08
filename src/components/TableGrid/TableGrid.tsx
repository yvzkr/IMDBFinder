import classes from './TableGrid.module.scss';
import {Loader} from '../Loader';

export type TData = {
  id: string;
  items: string[];
};

export interface TableGridProps<Header = string, Column extends TData = TData> {
  headers: Header[];
  rows: Column[];
  loading?: boolean;
  onClickRow?: (id: string) => void;
}

export function TableGrid<Header, Column extends TData>({
  headers,
  rows,
  loading,
  onClickRow,
}: TableGridProps<Header, Column>) {
  const handleOnClickRow = (row: Column) => {
    if (onClickRow) {
      onClickRow(row.id);
    }
  };

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
            <tr
              key={index}
              className={classes.tableBodyRow}
              onClick={() => handleOnClickRow(rowItem)}
            >
              {rowItem.items.map((item, columnIndex) => (
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
/*
<td key={columnIndex} className={classes.tableBodyCell}>
                    <>{item}</>
                  </td>
*/
