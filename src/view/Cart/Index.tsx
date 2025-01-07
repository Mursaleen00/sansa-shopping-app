import Notfound from '@/Components/common/notfound';
import Shoppingbag from '@/Components/common/shoppingbag';
import React from 'react';
import Shoppingbagcard from '@/Components/common/shoppingdbagcard';

const CartView = () => {
  return (
    <div>
      <Notfound />
      <Shoppingbag />
      <Shoppingbagcard />
    </div>
  );
};

export default CartView;
