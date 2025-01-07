import Notfound from '@/Components/common/notfound';
import Shoppingbag from '@/Components/common/shoppingbag';
import React from 'react';
// improt Shoppingbagcard from ''

const CartView = () => {
  return (
    <div>
      <Notfound />
      <Shoppingbag />
      {/* <Shoppingbagcard/> */}
    </div>
  );
};

export default CartView;
