// src/Components/common/sidebar.tsx
'use client';

// Constant Import
import { icons } from '@/constant/icons';
import { authPages, pages } from '@/constant/pagelist';
import { urls } from '@/constant/urls-data';

// Store Imports
import { removeAllLikedProduct } from '@/store/Slice/like-product-slice';
import { removeAllProducts } from '@/store/Slice/product-slice';
import { LikedState, RootState } from '@/store/store';

// React Imports & Next Imports
import Image from 'next/image';
import { deleteCookie, getCookie } from 'cookies-next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

// Translation Import
import { t } from 'i18next';

interface ISidebar {
  isOpen: boolean;
  setIsOpen: () => void;
}

const Sidebar = ({ isOpen, setIsOpen }: ISidebar) => {
  // pathName
  const pathName = usePathname();

  // product Selector
  const products = useSelector(
    (state: RootState) => state.productSlice.product,
  );

  // Liked product Selector
  const likedProducts = useSelector(
    (state: LikedState) => state.likedProductSlice.product,
  );

  // Token
  const token = getCookie('token');

  // Router
  const router = useRouter();

  // Dispatch
  const dispatch = useDispatch();

  if (!isOpen) return null;

  // handleLogOut
  const handleLogOut = () => {
    deleteCookie('token');
    router.push(urls.home);
    dispatch(removeAllProducts());
    dispatch(removeAllLikedProduct());
    router.refresh();
  };

  return (
    <div className='md:hidden bg-primary-length p-6 absolute right-0 flex flex-col gap-y-4 top-12 w-full shadow-md z-[999]'>
      {/* text section pages  */}
      <div className='flex flex-col gap-y-2'>
        {pages.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={setIsOpen}
            className={`${pathName == item.link ? 'text-primary' : 'text-secondary-700'}`}
          >
            <p>{t(item.text)}</p>
          </Link>
        ))}
      </div>
      {/* icons section pages  */}
      {token ? (
        <div>
          <div className='flex items-center gap-x-2 mt-4'>
            {icons.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                onClick={setIsOpen}
                className='relative'
              >
                <Image
                  alt=''
                  src={item.icon}
                  width={item.width}
                  height={item.height}
                />
                {likedProducts && likedProducts?.length > 0 && index == 0 && (
                  <div className=' flex size-4 text-[10px] items-center justify-center absolute rounded-full bg-error -top-2 -right-1 text-teal-50'>
                    {likedProducts?.length}
                  </div>
                )}
                {products && products?.length > 0 && index == 1 && (
                  <div className=' flex size-4 text-[10px] items-center justify-center absolute rounded-full bg-error -top-2 -right-1 text-teal-50'>
                    {products?.length}
                  </div>
                )}
              </Link>
            ))}
            <FiLogOut
              className='flex size-5 cursor-pointer'
              width={24}
              height={30}
              onClick={handleLogOut}
            />
          </div>
        </div>
      ) : (
        // auth section pages
        <div className='flex gap-x-8'>
          {authPages.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`${pathName === item.link ? 'text-primary' : 'text-secondary-700'}`}
            >
              {t(item.text)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
