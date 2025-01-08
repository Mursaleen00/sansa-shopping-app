'use client';
import Picture from '@/../public/icons/picture.svg';
import Input from '@/Components/Input';

const ProductView = () => {
  // function formatString(input: string) {
  //   return input
  //     .split('-')
  //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');
  // }

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
        />
      </div>

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
