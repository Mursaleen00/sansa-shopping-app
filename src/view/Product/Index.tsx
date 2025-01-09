'use client';
import Picture from '@/../public/icons/picture.svg';
import ProductCard from '@/Components/cards/product-card';
import Loader from '@/Components/common/loader';
import ProductNotfound from '@/Components/common/notfound';
import Pagination from '@/Components/common/pagination';
import Input from '@/Components/Input';
import { urls } from '@/constant/urls';
import { useGetAllProductsHook } from '@/services/products/get-all-products';
import { Fragment, useState } from 'react';
import { useDebounce } from 'use-debounce';

const ProductView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchValue] = useDebounce(search, 500);

  function componentDidMount(page: number) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setCurrentPage(page);
  }

  const { data, isPending } = useGetAllProductsHook({
    select: ['title', 'price', 'thumbnail', 'description'],
    skip: (currentPage - 1) * 16,
    limit: 16,
    sort: 'rating',
    order: 'asc',
    search: searchValue,
  });

  console.log('🚀 ~ ProductView ~ data:', data);
  // console.log('🚀 ~ ProductView ~ data:', data);

  const totalPage = data ? Math.round(data?.total / 16) : 10;

  return (
    <div className='px-6 md:px-12 xl:px-24 flex flex-col gap-y-10 py-10'>
      {/* All Product Categories */}
      <div className='flex justify-between items-center'>
        <p className='text-secondary-700 text-3xl'>All Product Categories</p>
        <Input
          label='Search'
          placeholder='Search all assets'
          icon={Picture.src}
          legend='Search'
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
                  link={urls.productDetails(item.id)}
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

      {/* {categoryList.map((item, i) => {
        const { data, isPending } = useGetProductsByCategoryHook({
          limit: 3,
          select: ['title', 'price', 'thumbnail', 'description'],
          category: item,
        });

        return (
          <Fragment key={i}>
            <div className='flex justify-between items-center'>
              <SecondaryHeading text={formatString(item) + ':'} />
              <Link
                href={urls.productCategory(item)}
                className='text-primary cursor-pointer'
              >
                See more+
              </Link>
            </div>
            {isPending ? (
              <div className='flex justify-center items-center'>
                <Loader />
              </div>
            ) : (
              <div className='flex gap-x-6 overflow-x-auto pb-2'>
                {data?.products.map((item, i) => (
                  <ProductCard
                    {...item}
                    key={i}
                    className='min-w-[350px]'
                    link={urls.productDetails(item.id)}
                  />
                ))}
              </div>
            )}
          </Fragment>
        );
      })} */}
    </div>
  );
};

export default ProductView;
