import React from 'react';
import { Pagination as PaginationStrap } from 'reactstrap';
import { PaginationItem } from './PaginationItem';

const siblingsCount = 1;

function generatePagesArray(from, to) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];
  return (
    <>
      <nav aria-label="pagination-nav">
        <PaginationStrap className="pagination">
          {currentPage > 1 + siblingsCount && (
            <>
              <PaginationItem onPageChange={onPageChange} number={1} />
              {currentPage > 2 + siblingsCount && <span>...</span>}
            </>
          )}

          {previousPages.length > 0 &&
            previousPages.map(page => (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            ))}

          <PaginationItem
            onPageChange={onPageChange}
            number={currentPage}
            isCurrent
          />

          {nextPages.length > 0 &&
            nextPages.map(page => (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            ))}

          {currentPage + siblingsCount < lastPage && (
            <>
              {currentPage + 1 + siblingsCount < lastPage && <span>...</span>}
              <PaginationItem onPageChange={onPageChange} number={lastPage} />
            </>
          )}
        </PaginationStrap>
      </nav>
    </>
  );
}
