import Productdetials from '@/Components/common/productdetials';
import ProductView from '@/view/Product/Index';
import React from 'react';
import NoProductInBag from '@/Components/common/noproductinbag';

const Page = () => {
  return (
    <div>
      <ProductView />
      <Productdetials />
      <NoProductInBag />
    </div>
  );
};

export default Page;
