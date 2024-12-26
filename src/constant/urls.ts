export const urls = {
  home: '/',
  signup: '/signup',
  signin: '/signin',
  product: '/product',
  cart: '/cart',
  favorite: '/favorite',
  profile: '/profile',
  search: (slug: string) => `/search/${slug}`,
  productDetail: (slug: string) => `/product/${slug}`,
};
