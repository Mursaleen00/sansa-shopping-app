import Productdetials from '@/Components/common/productdetials';
import ProductView from '@/view/Product/Index';
import React from 'react';
import No_product_in_bag from '@/Components/common/no_product_in_bag';

const Page = () => {
  return (
    <div>
      <ProductView />
      <Productdetials />
      <No_product_in_bag />
    </div>
  );
};

export default Page;
