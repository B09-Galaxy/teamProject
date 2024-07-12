'use client';

import api from '@/api/api';
import { TSupaInputBookMark } from '@/types/bookMark';
import useUserStore from '@/zustand/user.store';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

function useBookMark() {
  const { userId } = useUserStore();
  const queryClient = useQueryClient();
  const {
    data: bookMarks,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['bookMark'],
    queryFn: () => api.bookMark.getBookMarkData(userId)
  });

  const { mutateAsync: delBookMark } = useMutation({
    mutationFn: (bookMarkId: string) => api.bookMark.delBookMarkData(bookMarkId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookMark'] });
    }
  });

  const { mutateAsync: postBookMark } = useMutation({
    mutationFn: (bookMarkObj: TSupaInputBookMark) => {
      return api.bookMark.postBookMark(bookMarkObj);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookMark'] });
    }
  });
  return { bookMarks, isLoading, isError, delBookMark, postBookMark };
}

export default useBookMark;
