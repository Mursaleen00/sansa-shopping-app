import { AllProductType } from '@/types/products/all-products';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GET } from '../axios-request-handler';
import { URLS } from '../base-urls';

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
  const GetAllProductsFn = async (): Promise<AllProductType> => {
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
