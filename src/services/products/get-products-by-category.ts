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
  const GetProductsByCategoryFn = async (): Promise<AllProductType> => {
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
