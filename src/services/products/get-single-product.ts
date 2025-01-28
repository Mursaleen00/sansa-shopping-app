// src/services/products/get-single-product.ts

// Type Import
import { ProductType } from '@/types/products/single-product';

// React Import
import { useQuery, UseQueryResult } from '@tanstack/react-query';

// GET Import
import { GET } from '../axios-request-handler';

//  Base URLS Import
import { URLS } from '../base-urls';

// use interface GetSingleProductsHookProps
interface GetSingleProductsHookProps {
  id: string;
  select?: string[];
}

export const useGetSingleProductsHook = ({
  select,
  id,
}: GetSingleProductsHookProps): UseQueryResult<ProductType, Error> => {
  // GetSingleProductsFn
  const GetSingleProductsFn = async (): Promise<ProductType> => {
    // response
    const response = await GET(URLS.GET_SINGLE_PRODUCT(id, select));
    return response as ProductType;
  };

  return useQuery({
    queryFn: GetSingleProductsFn,
    queryKey: ['single-product', select, id],
  });
};
