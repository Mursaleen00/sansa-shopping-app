import ShoppingBagPayment from '@/Components/common/shopping-bag-payment';
import Shoppingbag from '@/Components/common/shoppingbag';
import Shoppingbagcard from '@/Components/common/shoppingdbagcard';

const CartView = () => {
  return (
    <div>
      {/* <ProductNotfound /> */}
      <Shoppingbag />
      <Shoppingbagcard />
      <ShoppingBagPayment />
    </div>
  );
};

export default CartView;
