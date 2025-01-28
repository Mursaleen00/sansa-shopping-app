// src/view/Favorite/Index.tsx
'use client';

// Components Imports
import ProductCard from '@/Components/cards/product-card';
import BreadCrumb from '@/Components/common/bread-crumb';
import NoProduct from '@/Components/common/no-product';
import Input from '@/Components/inputs/input';

// Contact Import
import { urls } from '@/constant/urls-data';

// Store
import { RootState } from '@/store/store';

// React Imports
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

// useDebounce Import
import { useDebounce } from 'use-debounce';

const FavoriteView = () => {
  // State
  const [search, setSearch] = useState('');

  // search Value
  const [searchValue] = useDebounce(search, 500);

  // likedProducts
  const likedProducts = useSelector(
    (state: RootState) => state.likedProductSlice.product,
  );

  //  Data
  const data = searchValue
    ? likedProducts?.filter(product =>
        product.description.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : likedProducts;

  // Translation
  const { t } = useTranslation();

  return (
    <div className='px-6 md:px-12 xl:px-24 flex flex-col gap-y-10 py-10'>
      {/* All Product Categories */}
      <div className='flex gap-1'>
        {/* BreadCrumb */}
        <BreadCrumb
          items={[
            { name: 'Home', link: urls.home },
            { name: 'Favorite', link: urls.favorite },
          ]}
        />
      </div>

      <div className='flex justify-between items-center'>
        <p className='text-secondary-700 text-3xl'>
          {t('All Favorite Categories')}
        </p>
        {/* Input  */}
        <Input
          placeholder='Search all assets'
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {/* Fragment */}
      <Fragment>
        {data && data.length !== 0 ? (
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
            {data?.map((item, i) => (
              <ProductCard
                {...item}
                key={i}
              />
            ))}
          </div>
        ) : (
          // --------------No Product----------
          <NoProduct
            title={'No favorite product'}
            description={'Favorite product will appear here'}
          />
        )}
      </Fragment>
    </div>
  );
};

export default FavoriteView;
