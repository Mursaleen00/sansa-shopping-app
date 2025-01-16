import { MeTypes } from '@/types/users/me';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GET } from '../axios-request-handler';
import { URLS } from '../base-urls';

export const useGetMeHook = (): UseQueryResult<MeTypes, Error> => {
  const GetAllProductsFn = async (): Promise<MeTypes> => {
    const response = await GET(URLS.GET_ME);
    return response as MeTypes;
  };

  return useQuery({
    queryFn: GetAllProductsFn,
    queryKey: ['me'],
  });
};
