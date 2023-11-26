"use client"
import useBookDetailStore from '@/hooks/useBookDetailStore';
import React from 'react'
import Modal from './Modal';
import { useBookDetailQuery } from '@/redux/feature/bookApi';

const BookDetailModal = () => {
  const BookDetailStore = useBookDetailStore();
  const { data, isFetching, isLoading, isSuccess } = useBookDetailQuery(BookDetailStore.bookId);

  // console.log("B modal data", data)

  const body = <div className=" flex flex-col justify-center items-center">
    {isFetching && <div>loading....</div>}
    {isSuccess && <div>
      <span>{data?.author}</span>

    </div>}


  </div>

  return (
    <Modal isModalOpen={BookDetailStore.isOpen} onClose={BookDetailStore.onClose}>
      {data && body}
    </Modal>
  )
}

export default BookDetailModal
