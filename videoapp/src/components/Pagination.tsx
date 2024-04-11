import React from "react";

interface PaginationProps {
  pageCount: number;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  setPageCount,
}) => {
  const handlePreviousClick = () => {
    if (pageCount > 1) {
      setPageCount((prevPageCount) => prevPageCount - 1);
    }
  };

  const handleNextClick = () => {
    setPageCount((prevPageCount) => prevPageCount + 1);
  };

  return (
    <div className="flex items-center justify-around gap-4 my-4">
      {/* Previous Button */}
      <button
        disabled={pageCount === 1}
        onClick={handlePreviousClick}
        className={`flex items-center justify-center px-3 h-10 text-sm bg-[blue]  font-medium text-gray-700 bg-aqua-light border border-aqua-light rounded-lg hover:bg-aqua-medium hover:text-gray-800 dark:bg-aqua-medium dark:border-aqua-medium dark:text-gray-400 dark:hover:bg-aqua-dark dark:hover:text-white ${
          pageCount === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <svg
          className="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Previous
      </button>
      {/* Page Count */}
      <p className="text-sm font-medium text-gray-700 w-12 text-center">
        {pageCount}
      </p>
      {/* Next Button */}
      <button
        disabled={pageCount === 9}
        onClick={handleNextClick}
        className={`flex items-center justify-center px-3 h-10 text-sm bg-[blue] font-medium text-gray-700 bg-aqua-light border border-aqua-light rounded-lg hover:bg-aqua-medium hover:text-gray-800 dark:bg-aqua-medium dark:border-aqua-medium dark:text-gray-400 dark:hover:bg-aqua-dark dark:hover:text-white ${
          pageCount === 9 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Next
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};
