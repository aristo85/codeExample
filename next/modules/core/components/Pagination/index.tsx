import React, {FC} from 'react';
import {
  ButtonsPaginationBlock,
  PaginationButton,
  PaginationContainer,
  PaginationItemsBlock,
  RewindLeftIcon,
  RewindRightIcon,
  StyledArrowLeftIcon,
  StyledArrowRightIcon,
} from '@/modules/core/components/Pagination/styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  visiblePages: number; // visible pagination items in the center when we have a lot of total pages
  rightSideButtons: number; // number of pagination items on the right side from active button
  leftSideButtons: number; // number of pagination items on the left side from active button
  isRewindButtonsShown?: boolean;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  visiblePages = 4,
  rightSideButtons = 1,
  leftSideButtons = 1,
  isRewindButtonsShown = false,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderNumberButtons = () => {
    const buttons = [];

    let startPage = 1;
    let endPage = totalPages;

    // If total pages exceed visible pages
    if (totalPages > visiblePages) {
      if (currentPage < visiblePages) {
        endPage = visiblePages;
      } else if (currentPage >= totalPages - rightSideButtons) {
        startPage = totalPages - visiblePages + leftSideButtons;
      } else {
        startPage = currentPage - leftSideButtons;
        endPage = currentPage + rightSideButtons;
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <PaginationButton
          type="button"
          key={page}
          active={page === currentPage}
          onClick={() => handlePageChange(page)}>
          {page}
        </PaginationButton>,
      );
    }

    return buttons;
  };

  return (
    <PaginationContainer>
      <ButtonsPaginationBlock>
        {isRewindButtonsShown && (
          <PaginationButton
            type="button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(1)}>
            <RewindLeftIcon />
          </PaginationButton>
        )}
        <PaginationButton
          type="button"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}>
          <StyledArrowLeftIcon />
        </PaginationButton>
      </ButtonsPaginationBlock>

      <PaginationItemsBlock>
        {totalPages > visiblePages &&
          currentPage > visiblePages - leftSideButtons && (
            <>
              <PaginationButton
                type="button"
                onClick={() => handlePageChange(1)}>
                1
              </PaginationButton>
              <span>&hellip;</span>
            </>
          )}

        {renderNumberButtons()}

        {totalPages > visiblePages &&
          currentPage < totalPages - rightSideButtons && (
            <>
              <span>&hellip;</span>
              <PaginationButton
                type="button"
                onClick={() => handlePageChange(totalPages)}>
                {totalPages}
              </PaginationButton>
            </>
          )}
      </PaginationItemsBlock>

      <ButtonsPaginationBlock>
        <PaginationButton
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}>
          <StyledArrowRightIcon disabled={currentPage === totalPages} />
        </PaginationButton>
        {isRewindButtonsShown && (
          <PaginationButton
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}>
            <RewindRightIcon />
          </PaginationButton>
        )}
      </ButtonsPaginationBlock>
    </PaginationContainer>
  );
};

export default Pagination;
