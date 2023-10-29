"use client"
import React from 'react'
import Modal from './Modal'
import useAuthModalStore from '@/hooks/useAuthModalStore';

const RegisterModal = () => {
    const { isOpen, onClose } = useAuthModalStore();

    const body = <div className="">
        <span>My Body</span>
    </div>

    return (
        <Modal isModalOpen={isOpen} onClose={onClose}>
            {body}
        </Modal>
    )
}

export default RegisterModal