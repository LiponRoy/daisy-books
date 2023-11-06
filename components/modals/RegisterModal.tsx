"use client"
import React from 'react'
import Modal from './Modal'
import useAuthModalStore from '@/hooks/useAuthModalStore';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { Heading } from '../heading/Heading';
import CustomButton from '../CustomButton';

const RegisterModal = () => {
    const { isOpen, onClose } = useAuthModalStore();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        values: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)

    };

    const body = <div className="container mx-auto p-4 max-w-md">
        <Heading title='SignUp' />
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input id="name"
                label="name"
                register={register}
                errors={errors}
                required
                type="text" />

            <Input id="email"
                label="email"
                register={register}
                errors={errors}
                required
                type="text" />
            <Input id="password"
                label="password"
                register={register}
                errors={errors}
                required
                type="password" />

            <CustomButton label='SUBMIT' type='submit' />
        </form>

    </div>

    return (
        <Modal isModalOpen={isOpen} onClose={onClose}>
            {body}
        </Modal>
    )
}

export default RegisterModal