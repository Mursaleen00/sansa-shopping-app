import ProductNotfound from '@/Components/common/notfound';
import Shoppingbag from '@/Components/common/shoppingbag';
import React from 'react';
import Shoppingbagcard from '@/Components/common/shoppingdbagcard';
import ShoppingBagPayment from '@/Components/common/shopping-bag-payment';

const CartView = () => {
  return (
    <div>
      <ProductNotfound />
      <Shoppingbag />
      <Shoppingbagcard />
      <ShoppingBagPayment />
    </div>
  );
};

export default CartView;
