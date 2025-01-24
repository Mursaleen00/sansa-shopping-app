'use client';
import ProductCard from '@/Components/cards/product-card';
import ProductNotfound from '@/Components/common/not-found';
import Input from '@/Components/inputs/input';
import { RootState } from '@/store/store';
import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';

const FavoriteView = () => {
  const [search, setSearch] = useState('');
  const [searchValue] = useDebounce(search, 500);

  const likedProducts = useSelector(
    (state: RootState) => state.likedProductSlice.product,
  );

  const data = searchValue
    ? likedProducts?.filter(product =>
        product.description.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : likedProducts;

  return (
    <div className='px-6 md:px-12 xl:px-24 flex flex-col gap-y-10 py-10'>
      {/* All Product Categories */}
      <div className='flex gap-1'>
        <div className='text-[#B3B7B1]'>Home</div>/<div>Favorite</div>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-secondary-700 text-3xl'>All Product Categories</p>
        <Input
          placeholder='Search all assets'
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <Fragment>
        {data?.length !== 0 ? (
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
            {data?.map((item, i) => (
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
    </div>
  );
};

export default FavoriteView;
