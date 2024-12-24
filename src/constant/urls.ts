export const urls = {
  home: '/',
  signup: '/signup',
  signin: '/signin',
  product: '/product',
  cart: '/cart',
  favorite: '/favorite',
  shoppingBag: '/shoppingBag',
  profile: '/profile',
  searching: (slug: string) => `/searching/${slug}`,
  productDetail: (slug: string) => `/product/${slug}`,
};
