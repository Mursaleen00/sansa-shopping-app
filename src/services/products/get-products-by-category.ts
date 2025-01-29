// src/services/products/get-products-by-category.ts

// products import
import { AllProductType } from '@/types/products/all-products';

// React import
import { useQuery, UseQueryResult } from '@tanstack/react-query';

// GET import
import { GET } from '../axios-request-handler';

// URLS
import { URLS } from '../base-urls';

// use interface  GetAllProductsHookProps
interface GetAllProductsHookProps {
  search?: string;
  limit?: number;
  skip?: number;
  select?: string[];
  sort?: string;
  order?: 'asc' | 'desc';
  category?: string;
}

export const useGetProductsByCategoryHook = ({
  search,
  limit,
  skip,
  select,
  sort,
  order,
  category,
}: GetAllProductsHookProps): UseQueryResult<AllProductType, Error> => {
  // GetProductsByCategoryFn
  const GetProductsByCategoryFn = async (): Promise<AllProductType> => {
    // response
    const response = await GET(
      URLS.GET_PRODUCTS_BY_CATEGORY({
        search,
        limit,
        skip,
        select,
        sort,
        order,
        slug: category,
      }),
    );
    return response as AllProductType;
  };

  return useQuery({
    queryFn: GetProductsByCategoryFn,
    queryKey: [
      'products-by-category',
      search,
      limit,
      skip,
      select,
      sort,
      order,
      category,
    ],
  });
};
