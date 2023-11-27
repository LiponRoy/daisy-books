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
      cartQuantity: 1,

    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Getting image file from input
    const pictureData = data.imageSrc[0];

    // Bind pic
    const formData = new FormData();
    formData.append("file", pictureData);
    formData.append("upload_preset", "daisyBooksCloud");

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
      console.log("Book upload failed");
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
              label="Title"
              register={register}
              errors={errors}
              required
              type="text"
            />
            <Input
              id="author"
              label="Author"
              register={register}
              errors={errors}
              required
              type="text"
            />
            <Input
              id="price"
              label="Price"
              register={register}
              errors={errors}
              required
              type="Number"
            />
            {/* Category */}
            <div className="w-[95%]  mx-auto mt-1">
              <label className="block  ml-1  text-sm text-slate-500 dark:text-white">
                Select an category
              </label>
              <select
                id="category"
                {...register("category")}
                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-light_green focus:border-light_green block w-full p-[13px] my-[6px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-light_green dark:focus:border-light_green"
              >
                <option selected >Choose please</option>
                <option value="children">children</option>
                <option value="Novel">Novel</option>
                <option value="Biography">Biography</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
              </select>
            </div>
            {/* End Category */}
          </div>

          <div className=" flex flex-col justify-center items-start">
            <Input
              id="publicationDate"
              label="Publication Date"
              register={register}
              errors={errors}
              required
              type="date"
            />
            <Input
              id="numberOfPages"
              label="Number Of Pages"
              register={register}
              errors={errors}
              required
              type="Number"
            />
            {/* Language */}
            <div className="w-[95%]  mx-auto mt-1">
              <label className="block  ml-1  text-sm text-slate-500 dark:text-white">
                Select Language
              </label>
              <select
                id="language"
                {...register("language")}
                className="bg-gray-50 border-2  border-gray-300 text-gray-900 text-sm rounded-md focus:ring-light_green focus:border-light_green block w-full p-[13px] my-[6px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-light_green dark:focus:border-light_green"
              >
                <option selected >Choose please</option>
                <option value="english">English</option>
                <option value="bangla">Bangla</option>

              </select>
            </div>
            {/* End Language */}
            <Input
              id="imageSrc"
              label="imageSrc"
              register={register}
              errors={errors}
              required
              type="file"

            />
          </div>
        </div>

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
