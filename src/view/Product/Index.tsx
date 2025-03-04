// src/view/Product/Index.tsx
'use client';

// Components imports
import ProductCard from '@/Components/cards/product-card';
import BreadCrumb from '@/Components/common/bread-crumb';
import Loader from '@/Components/common/loader';
import ProductNotfound from '@/Components/common/not-found';
import Pagination from '@/Components/common/pagination';
import Input from '@/Components/inputs/input';

// Constant import
import { urls } from '@/constant/urls-data';

// Services
import { useGetAllProductsHook } from '@/services/products/get-all-products';

// React imports & Next import
import { useSearchParams } from 'next/navigation';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';

// useDebounce import
import { useDebounce } from 'use-debounce';

const ProductView = () => {
  const step = useSearchParams().get('step');
  const [currentPage, setCurrentPage] = useState(Number(step) || 1);
  const [search, setSearch] = useState('');
  const [searchValue] = useDebounce(search, 500);

  function componentDidMount(page: number) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setCurrentPage(page);

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('step', page.toString());
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?${searchParams.toString()}`,
    );
  }

  const { data, isPending } = useGetAllProductsHook({
    select: ['title', 'price', 'thumbnail', 'description'],
    skip: (currentPage - 1) * 16,
    limit: 16,
    sort: 'rating',
    order: 'asc',
    search: searchValue,
  });

  const totalPage = data ? Math.round(data?.total / 16) : 10;

  const { t } = useTranslation();

  return (
    <div className='px-6 md:px-12 xl:px-24 flex flex-col gap-y-10 py-10'>
      {/* All Product Categories */}
      <BreadCrumb
        items={[
          { name: 'Home', link: urls.home },
          { name: 'Products', link: urls.product },
        ]}
      />
      <div className='flex justify-between items-center'>
        <p className='text-secondary-700 text-3xl'>
          {t('All Product Categories')}
        </p>
        <Input
          placeholder='Search all assets'
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {isPending ? (
        <div className='flex min-h-[50dvh] justify-center items-center'>
          <Loader />
        </div>
      ) : (
        <Fragment>
          {data?.products.length !== 0 ? (
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
              {data?.products.map((item, i) => (
                <ProductCard
                  {...item}
                  key={i}
                />
              ))}
            </div>
          ) : (
            <ProductNotfound />
          )}
        </Fragment>
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={componentDidMount}
        totalPages={totalPage}
      />
    </div>
  );
};

export default ProductView;
