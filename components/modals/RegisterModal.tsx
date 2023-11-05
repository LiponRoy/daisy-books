"use client"
import React from 'react'
import Modal from './Modal'
import useAuthModalStore from '@/hooks/useAuthModalStore';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';

const RegisterModal = () => {
    const { isOpen, onClose } = useAuthModalStore();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        values: {
            title: "",
            description: "",
        },
    });

    const body = <div className="">
        <Input id="title"
            label="title"
            register={register}
            errors={errors}
            required
            type="text" />

        <Input id="title"
            label="title"
            register={register}
            errors={errors}
            required
            type="text" />
        <Input id="title"
            label="title"
            register={register}
            errors={errors}
            required
            type="text" />

    </div>

    return (
        <Modal isModalOpen={isOpen} onClose={onClose}>
            {body}
        </Modal>
    )
}

export default RegisterModal