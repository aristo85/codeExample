import { FC, useCallback } from 'react';
// components
import Icon from 'modules/core/components/icon';

import type { PaginationProps } from './pagination.interface';
import { Root, PaginationButton } from './pagination.styled';

const Pagination: FC<PaginationProps> = ({
  maxPages,
  currentPage,
  onChange,
}) => {
  const handlePageClick = useCallback(
    (pageIndex: number) => () => {
      onChange(pageIndex + 1);
    },
    [onChange]
  );

  const handlePrevClick = useCallback(() => {
    onChange(currentPage - 1);
  }, [onChange, currentPage]);

  const handleNextClick = useCallback(() => {
    onChange(currentPage + 1);
  }, [onChange, currentPage]);

  return (
    <Root>
      <PaginationButton
        isActive={false}
        clickable={currentPage > 1}
        onClick={handlePrevClick}
      >
        <Icon name='arrowLeft' width={6} />
      </PaginationButton>
      {[...Array(maxPages)].map((_, index) => (
        <PaginationButton
          key={index}
          isActive={index + 1 === currentPage}
          clickable
          onClick={handlePageClick(index)}
        >
          {index + 1}
        </PaginationButton>
      ))}
      <PaginationButton
        isActive={false}
        clickable={currentPage < maxPages}
        onClick={handleNextClick}
      >
        <Icon name='arrowRight' width={6} />
      </PaginationButton>
    </Root>
  );
};

export default Pagination;
