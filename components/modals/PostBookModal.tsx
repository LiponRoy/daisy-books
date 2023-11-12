"use client"
import React from 'react'
import Modal from './Modal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { Heading } from '../heading/Heading';
import CustomButton from '../CustomButton';
import { toast } from 'react-hot-toast';
import usePostBookModalStore from '@/hooks/usePostBookModalStore';
import { useCreateBookMutation } from '@/redux/feature/bookApi';

const PostBookModal = () => {
    const postBookModalStore = usePostBookModalStore();
    const [createBook, { isLoading, isSuccess, isError }] = useCreateBookMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({

        values: {
            title: "",
            author: "",
            category: "",
            publicationDate: "",
            numberOfPages: 0,
            language: "",
            description: "",
            imageSrc: ""
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("submitted data :", data)
        try {

            await createBook(data)


            setTimeout(() => {
                postBookModalStore.onClose()
                toast.success("Book Created")
            }, 2000)


        } catch (error) {

        }



    };

    const body = <div className="container mx-auto p-4 max-w-md  overflow-scroll">
        <Heading title='Create Book' />
        <form onSubmit={handleSubmit(onSubmit)}>

            <Input id="title"
                label="title"
                register={register}
                errors={errors}
                required
                type="text" />
            <Input id="author"
                label="author"
                register={register}
                errors={errors}
                required
                type="text" />
            <Input id="category"
                label="category"
                register={register}
                errors={errors}
                required
                type="text" />
            <Input id="publicationDate"
                label="publicationDate"
                register={register}
                errors={errors}
                required
                type="date" />
            <Input id="numberOfPages"
                label="numberOfPages"
                register={register}
                errors={errors}
                required
                type="Number" />
            <Input id="language"
                label="language"
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

            <CustomButton label={isLoading ? "Posting.." : 'SUBMIT'} type='submit' />
        </form>


    </div>

    return (
        <Modal isModalOpen={postBookModalStore.isOpen} onClose={postBookModalStore.onClose}>
            {body}
        </Modal>
    )
}

export default PostBookModal