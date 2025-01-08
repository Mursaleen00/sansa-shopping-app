export const urls = {
  home: '/',
  signup: '/sign-up',
  signin: '/sign-in',
  product: '/product',
  cart: '/cart',
  favorite: '/favorite',
  profile: '/profile',
  about: '/about',
  contact: '/contact',
  productCategory: (slug: string) => `/product/category/${slug}`,
  productDetails: (id: number) => `/product/${id}`,
};
