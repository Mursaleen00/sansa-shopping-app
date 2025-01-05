const isLive = true;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const localhost = 'http://localhost:3000';

const baseUrl = isLive ? apiUrl : localhost;

interface filters {
  search?: string;
  limit?: number;
  skip?: number;
  select?: string[];
  sort?: string;
  order?: 'asc' | 'desc';
  slug?: string;
}

export const URLS = {
  // ---------------------------------- Products ------------------------------------
  // All Products
  GET_ALL_PRODUCTS: ({ search, limit, skip, select, sort, order }: filters) => {
    let url = `${baseUrl}/products?limit=${limit || 10}`;
    if (select) url += `&select=${select.join(',')}`;
    if (search) url += `&search=${search}`;
    if (order) url += `&order=${order}`;
    if (skip) url += `&skip=${skip}`;
    if (sort) url += `&sortBy=${sort}`;
    return url;
  },

  // Single Product
  GET_SINGLE_PRODUCT: (id: string) => `${baseUrl}/products/${id}`,

  // All Products Categories
  GET_ALL_CATEGORIES: `${baseUrl}/categories`,

  // Category List
  GET_CATEGORY_LIST: `${baseUrl}/products/category-list`,

  // Products By A Category
  //   GET_PRODUCTS_BY_CATEGORY: (slug: string) =>
  //     `${baseUrl}products/category/${slug}`,

  // /products?limit=${limit || 10}`;
  GET_PRODUCTS_BY_CATEGORY: ({
    search,
    limit,
    skip,
    select,
    sort,
    order,
    slug,
  }: filters) => {
    let url = `${baseUrl}/products/category/${slug}?limit=${limit || 10}`;
    if (select) url += `&select=${select.join(',')}`;
    if (search) url += `&search=${search}`;
    if (order) url += `&order=${order}`;
    if (skip) url += `&skip=${skip}`;
    if (sort) url += `&sortBy=${sort}`;
    return url;
  },

  // ---------------------------------- Users ------------------------------------
  // Me
  GET_ME: `${baseUrl}/user/me`,

  // Register User
  REGISTER_USER: `${baseUrl}users/add`,
};
