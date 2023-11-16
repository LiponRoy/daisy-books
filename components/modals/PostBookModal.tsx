"use client";
import React from "react";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";
import { Heading } from "../heading/Heading";
import CustomButton from "../CustomButton";
import { toast } from "react-hot-toast";
import usePostBookModalStore from "@/hooks/usePostBookModalStore";
import { useCreateBookMutation } from "@/redux/feature/bookApi";

const PostBookModal = () => {
  const postBookModalStore = usePostBookModalStore();
  const [createBook, { isLoading, isSuccess, isError }] =
    useCreateBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    values: {
      title: "",
      author: "",
      price: 0,
      category: "",
      publicationDate: "",
      numberOfPages: 0,
      language: "",
      description: "",
      imageSrc: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Getting image file from input
    const pictureData = data.imageSrc[0];

    // Bind pic
    const formData = new FormData();
    formData.append("file", pictureData);
    formData.append("upload_preset","daisyBooksCloud");

    try {
        // Upload Image to cloudinary process start
      const uploadResponse = await fetch(
        "https://api.cloudinary.com/v1_1/lipon123/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!uploadResponse.ok) {
        throw new Error("image upload failed to cloudinary ");
      }
      const uploadedImageData = await uploadResponse.json();
      // After Upload Image to cloudinary getting image URL
      const imageUrl = uploadedImageData.secure_url;
      // Added image url to our data
      const finalData = { ...data, imageSrc: imageUrl };
      // now push data to mongodb
      await createBook(finalData);
    
      setTimeout(() => {
        postBookModalStore.onClose();
        toast.success("Book Created");
      }, 2000);
    } catch (error) {
      console.log("Book upload failed")
    }

  };

  const body = (
    <div className="container mx-auto p-4 max-w-md  overflow-scroll">
      <Heading title="Create Book" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex justify-center items-start">
          <div className=" flex flex-col justify-center items-start">
            <Input
              id="title"
              label="title"
              register={register}
              errors={errors}
              required
              type="text"
            />
            <Input
              id="author"
              label="author"
              register={register}
              errors={errors}
              required
              type="text"
            />
            <Input
              id="price"
              label="price"
              register={register}
              errors={errors}
              required
              type="Number"
            />
            <Input
              id="category"
              label="category"
              register={register}
              errors={errors}
              required
              type="text"
            />
          </div>

          <div className=" flex flex-col justify-center items-start">
            <Input
              id="publicationDate"
              label="publicationDate"
              register={register}
              errors={errors}
              required
              type="date"
            />
            <Input
              id="numberOfPages"
              label="numberOfPages"
              register={register}
              errors={errors}
              required
              type="Number"
            />
            <Input
              id="language"
              label="language"
              register={register}
              errors={errors}
              required
              type="text"
            />
          </div>
        </div>
        <Input
          id="imageSrc"
          label="imageSrc"
          register={register}
          errors={errors}
          required
          type="file"
        />
        <Input
          id="description"
          label="description"
          register={register}
          errors={errors}
          required
          type="text"
        />
        <CustomButton
          label={isLoading ? "Posting.." : "SUBMIT"}
          type="submit"
        />
      </form>
    </div>
  );

  return (
    <Modal
      isModalOpen={postBookModalStore.isOpen}
      onClose={postBookModalStore.onClose}
    >
      {body}
    </Modal>
  );
};

export default PostBookModal;
