import ShoppingBagPayment from '@/Components/shopping-bag-page/shopping-bag-payment';
import Shoppingbag from '@/Components/shopping-bag-page/shoppingbag';
import Shoppingdbagcard from '@/Components/shopping-bag-page/shoppingdbagcard';

const CartView = () => {
  return (
    <div>
      {/* <ProductNotfound /> */}
      <Shoppingbag />
      <Shoppingdbagcard />
      <ShoppingBagPayment />
    </div>
  );
};

export default CartView;
