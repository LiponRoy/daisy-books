"use client"
import React from 'react'
import Modal from './Modal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { Heading } from '../heading/Heading';
import CustomButton from '../CustomButton';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import useRegisterModalStore from '@/hooks/useRegisterModalStore';
import useLoginModalStore from '@/hooks/useLoginModalStore';

const RegisterModal = () => {
    const loginModalStore = useLoginModalStore();
    const registerModalStore = useRegisterModalStore();

    const switchToLoginModal = () => {
        registerModalStore.onClose()
        loginModalStore.onOpen();

    }

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
        axios
            .post('/api/register', data)
            .then(() => {
                toast.success('Registered!');
                registerModalStore.onClose();
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
        <div className=" text-center text-slate-500">
            <span>Already have an account? <span onClick={switchToLoginModal} className=' font-semibold cursor-pointer'>Login Now</span></span>
        </div>

    </div>

    return (
        <Modal isModalOpen={registerModalStore.isOpen} onClose={registerModalStore.onClose}>
            {body}
        </Modal>
    )
}

export default RegisterModal