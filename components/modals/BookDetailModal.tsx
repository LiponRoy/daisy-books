"use client"
import useBookDetailStore from '@/hooks/useBookDetailStore';
import React from 'react'
import Modal from './Modal';
import { useBookDetailQuery } from '@/redux/feature/bookApi';

const BookDetailModal = () => {
    const BookDetailStore = useBookDetailStore();
  const { data, isFetching, isLoading, isSuccess } = useBookDetailQuery();

  console.log("B modal data",data)

  const body=<div className=" flex flex-col justify-center items-center">
    <span>Book Detail Modal</span>


  </div>

  return (
    <Modal isModalOpen={ BookDetailStore.isOpen} onClose={ BookDetailStore.onClose}>
            {body}
        </Modal>
  )
}

export default BookDetailModal
