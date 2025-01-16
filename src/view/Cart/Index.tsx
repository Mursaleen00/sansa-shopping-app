import ShoppingBagPayment from '@/Components/shopping-bag-page/shopping-bag-payment';
import Shoppingbag from '@/Components/shopping-bag-page/shopping-bag';
import Shoppingdbagcard from '@/Components/shopping-bag-page/shopping-bag-card';

const CartView = () => {
  return (
    <div>
      <div className='flex gap-1 py-4'>
        <div className='text-[#B3B7B1]'>Home</div>/<div>Shopping bag</div>
      </div>
      {/* <ProductNotfound /> */}
      <Shoppingbag />
      <Shoppingdbagcard />
      <ShoppingBagPayment />
    </div>
  );
};

export default CartView;
