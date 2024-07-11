'use client';

import api from '@/api/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fakeUserId = 'edd2629c-82d7-4d2d-9c7f-e692afc978f5';

function useBookMark() {
  const queryClient = useQueryClient();
  const {
    data: bookMarks,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['bookMark'],
    queryFn: () => api.bookMark.getBookMarkData(fakeUserId)
  });

  const { mutateAsync: delBookMark } = useMutation({
    mutationFn: (bookMarkId: number) => api.bookMark.delBookMarkData(bookMarkId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookMark'] });
    }
  });

  return { bookMarks, isLoading, isError, delBookMark };
}

export default useBookMark;
