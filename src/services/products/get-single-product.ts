import { ProductType } from '@/types/products/single-product';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GET } from '../axios-request-handler';
import { URLS } from '../base-urls';

interface GetSingleProductsHookProps {
  id: string;
  select?: string[];
}

export const useGetSingleProductsHook = ({
  select,
  id,
}: GetSingleProductsHookProps): UseQueryResult<ProductType, Error> => {
  const GetSingleProductsFn = async (): Promise<ProductType> => {
    const response = await GET(URLS.GET_SINGLE_PRODUCT(id, select));
    return response as ProductType;
  };

  return useQuery({
    queryFn: GetSingleProductsFn,
    queryKey: ['single-product', select, id],
  });
};
