// src/Components/common/pagination.tsx

// React Imports
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { FaAnglesRight, FaAnglesLeft } from 'react-icons/fa6';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (_page: number) => void;
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <ResponsivePagination
      current={currentPage}
      maxWidth={6}
      total={totalPages}
      onPageChange={setCurrentPage}
      className='flex gap-[5px] justify-end list-none w-full m-0 p-0'
      pageItemClassName='font-semibold text-[13px] border rounded-lg  w-[30px] text-secondary-700 border-border h-[32px] flex justify-center items-center list-none'
      activeItemClassName='border-none list-none bg-primary text-white'
      navClassName='md:text-lg text-sm'
      //   disabledItemClassName='text-lightGray'
      nextLabel={
        <FaAnglesRight className='text-secondary-700 cursor-pointer hover:text-primary text-sm bg-primary-length' />
      }
      previousLabel={
        <FaAnglesLeft className='text-secondary-700 cursor-pointer hover:text-primary text-sm bg-primary-length' />
      }
    />
  );
};

export default Pagination;
