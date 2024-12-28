export const urls = {
  home: '/',
  signup: '/sign-up',
  signin: '/sign-in',
  product: '/product',
  cart: '/cart',
  favorite: '/favorite',
  profile: '/profile',
  search: (slug: string) => `/search/${slug}`,
  productDetail: (slug: string) => `/product/${slug}`,
};
