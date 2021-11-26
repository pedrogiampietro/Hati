import React from 'react';
import {
  PaginationItem as PaginationItemStrap,
  PaginationLink,
} from 'reactstrap';

export function PaginationItem({ number, isCurrent = false, onPageChange }) {
  if (isCurrent) {
    return (
      <>
        <PaginationItemStrap className="active">
          <PaginationLink onClick={() => onPageChange(number)}>
            {number}
          </PaginationLink>
        </PaginationItemStrap>
      </>
    );
  }
  return (
    <PaginationItemStrap>
      <PaginationLink onClick={() => onPageChange(number)}>
        {number}
      </PaginationLink>
    </PaginationItemStrap>
  );
}
