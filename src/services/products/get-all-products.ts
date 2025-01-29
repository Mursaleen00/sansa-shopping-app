// src/services/products/get-all-products.ts

// Product import
import { AllProductType } from '@/types/products/all-products';

// React import
import { useQuery, UseQueryResult } from '@tanstack/react-query';

// GET
import { GET } from '../axios-request-handler';

// URLS
import { URLS } from '../base-urls';

// use interface GetAllProductsHookProps
interface GetAllProductsHookProps {
  search?: string;
  limit?: number;
  skip?: number;
  select?: string[];
  sort?: string;
  order?: 'asc' | 'desc';
}

export const useGetAllProductsHook = ({
  search,
  limit,
  skip,
  select,
  sort,
  order,
}: GetAllProductsHookProps): UseQueryResult<AllProductType, Error> => {
  // GetAllProductsFn
  const GetAllProductsFn = async (): Promise<AllProductType> => {
    // response
    const response = await GET(
      URLS.GET_ALL_PRODUCTS({ search, limit, skip, select, sort, order }),
    );
    return response as AllProductType;
  };

  return useQuery({
    queryFn: GetAllProductsFn,
    queryKey: ['all-products', search, limit, skip, select, sort, order],
  });
};
