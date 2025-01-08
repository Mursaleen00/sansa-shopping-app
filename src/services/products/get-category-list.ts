import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GET } from '../axios-request-handler';
import { URLS } from '../base-urls';

export const useGetCategoryListHook = (): UseQueryResult<string[], Error> => {
  const GetCategoryListFn = async (): Promise<string[]> => {
    const response = await GET(URLS.GET_CATEGORY_LIST);
    return response as string[];
  };

  return useQuery({
    queryFn: GetCategoryListFn,
    queryKey: ['category-list'],
  });
};
