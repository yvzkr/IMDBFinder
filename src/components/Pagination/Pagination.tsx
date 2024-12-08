import classes from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  // If there's only one page or no pages, don't show pagination
  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={classes.pagination}>
      {currentPage > 1 && <button onClick={handlePrevious}>Previous</button>}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && <button onClick={handleNext}>Next</button>}
    </div>
  );
}
