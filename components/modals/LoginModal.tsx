"use client"
import React from 'react'
import Modal from './Modal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { Heading } from '../heading/Heading';
import CustomButton from '../CustomButton';
import { toast } from 'react-hot-toast';
import useLoginModalStore from '@/hooks/useLoginModalStore';
import useRegisterModalStore from '@/hooks/useRegisterModalStore';
import { signIn } from 'next-auth/react';
// icons for social media login
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const LoginModal = () => {
    const router = useRouter();
    const loginModalStore = useLoginModalStore();
    const registerModalStore = useRegisterModalStore();

    const switchToRegisterModal = () => {
        loginModalStore.onClose();
        registerModalStore.onOpen();

    }


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        values: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        // setIsLoading(true);

        signIn("credentials", {
            ...data,
            redirect: false,
        }).then((callback) => {
            //   setIsLoading(false);

            if (callback?.ok) {
                toast.success("Logged in");
                router.refresh();
                loginModalStore.onClose();
            }

            if (callback?.error) {
                toast.error(callback.error);
            }


        });
    };

    const body = <div className="container mx-auto p-4 max-w-md">
        <Heading title='Login' />
        <form onSubmit={handleSubmit(onSubmit)}>

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

            <CustomButton label='LOGIN' type='submit' />
        </form>
        <div className="w-full flex-col-center">
            <span className=' text-center'>OR</span>
            <CustomButton icon={FcGoogle} outline label='Login With Google' />
            <CustomButton icon={FaGithub} outline label='Login With Github' />


        </div>
        <div className=" text-center text-slate-500 my-1">
            <span>Don't have an account? <span onClick={switchToRegisterModal} className=' font-semibold cursor-pointer'>Signup Now</span></span>
        </div>

    </div>

    return (
        <Modal isModalOpen={loginModalStore.isOpen} onClose={loginModalStore.onClose}>
            {body}
        </Modal>
    )
}

export default LoginModal