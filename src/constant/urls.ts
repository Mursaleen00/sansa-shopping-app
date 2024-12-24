export const urls = {
  home: '/',
  signup: '/signup',
  signin: '/signin',
  product: '/product',
  cart: '/cart',
  favorite: '/favorite',
  profile: '/profile',
  searching: (slug: string) => `/searching/${slug}`,
  productDetail: (slug: string) => `/product/${slug}`,
};
