"use client"
import React from 'react'
import Modal from './Modal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { Heading } from '../heading/Heading';
import CustomButton from '../CustomButton';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import usePostBookModalStore from '@/hooks/usePostBookModalStore';
import axios from 'axios';

const PostBookModal = () => {
    const postBookModalStore = usePostBookModalStore();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        values: {
            name: "",
            description: "",
            imageSrc: ""
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
     
        console.log(data)
        axios
        .post('/api/book', data)
        .then(() => {
            toast.success('Book Posted!');
            postBookModalStore.onClose();
        })
        .catch((error) => {
            toast.error(error);
            console.log(error)
        })
        .finally(() => {
            // setIsLoading(false);
        });

      };

    const body = <div className="container mx-auto p-4 max-w-md">
        <Heading title='Create Book' />
        <form onSubmit={handleSubmit(onSubmit)}>

            <Input id="name"
                label="name"
                register={register}
                errors={errors}
                required
                type="text" />
            <Input id="description"
                label="description"
                register={register}
                errors={errors}
                required
                type="text" />
                
            <Input id="imageSrc"
                label="imageSrc"
                register={register}
                errors={errors}
                required
                type="text" />

            <CustomButton label='SUBMIT' type='submit' />
        </form>
        

    </div>

    return (
        <Modal isModalOpen={ postBookModalStore.isOpen} onClose={ postBookModalStore.onClose}>
            {body}
        </Modal>
    )
}

export default PostBookModal