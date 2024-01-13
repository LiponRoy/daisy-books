"use client";
import React, { useState } from "react";
import { Heading } from "../heading/Heading";
import CustomButton from "../CustomButton";
import { toast } from "react-hot-toast";
import usePostBookModalStore from "@/hooks/usePostBookModalStore";
import { useCreateBookMutation } from "@/redux/feature/bookApi";
import Modal from "./Modal";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup
  .object({
    title: yup.string().required(),
    author: yup.string().required(),
    price: yup.number().required(),
    category: yup.string().required().label("Category"),
    publicationDate: yup.string().required(),
    numberOfPages: yup.number().required(),
    language: yup.string().required(),
    description: yup.string().required(),
    imageSrc: yup.mixed().required(),
    cartQuantity: yup.number().required(),
  })
  .required();

const PostBookModal = () => {
  const postBookModalStore = usePostBookModalStore();
  const [createBook, { isLoading, isSuccess, isError }] =
    useCreateBookMutation();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      author: "",
      category: "",
      publicationDate: "",
      language: "",
      description: "",
      imageSrc: "",
      cartQuantity: 1,
    },
  });

  const onSubmit = async (data: any) => {

    console.log("data...", data)

    setBtnDisabled(true);
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
        setBtnDisabled(false);
      }, 2000);
    } catch (error) {
      console.log("Book upload failed");
      setBtnDisabled(false);
    }
  };

  const body = (
    <div className="container mx-auto max-w-md py-10 px-5 md:px-10">
      <span className=" mb-20 font-semibold text-lg text-slate-500">
        Upload Product
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex-center gap-x-2 my-2">
          <div className="flex-col-start gap-y-2  w-full">
            <div className="  flex justify-between items-center">
              <span className=" text-xs ">Title</span>
              <p className="ml-1 text-red-500 text-xs">
                {errors.title && <span>Required Filed</span>}
              </p>
            </div>
            <input className="inputStyle outline-none" {...register("title")} />
          </div>

          <div className="flex-col-start gap-y-2 w-full">
            <div className="  flex justify-between items-center">
              <span className=" text-xs">Author</span>
              <p className="ml-1 text-red-500 text-xs">
                {errors.author && <span>Required Filed</span>}
              </p>
            </div>
            <input className="inputStyle outline-none" {...register("author")} />
          </div>
        </div>

        <div className=" flex-center gap-x-2 my-2">
          <div className="flex-col-start gap-y-2 w-full">
            <div className="  flex justify-between items-center">
              <span className=" text-xs">Price</span>
              <p className="ml-1 text-red-500 text-xs">
                {errors.price && <span>Required Filed</span>}
              </p>
            </div>
            <input
              type="number"
              className="inputStyle outline-none"
              {...register("price")}
            />
          </div>
          <div className="flex-col-start gap-y-2 w-full">
            <div className="  flex justify-between items-center">
              <span className=" text-xs">Publication Date</span>
              <p className="ml-1 text-red-500 text-xs">
                {errors.publicationDate && <span>Required Filed</span>}
              </p>
            </div>
            <input
              type="date"
              className="inputStyle outline-none"
              {...register("publicationDate")}
            />
          </div>
        </div>

        <div className=" flex-center gap-x-2 my-2">
          <div className="flex-col-start gap-y-2 w-full">
            <div className="  flex justify-between items-center">
              <span className=" text-xs">Number Of Pages</span>
              <p className="ml-1 text-red-500 text-xs">
                {errors.numberOfPages && <span>Required Filed</span>}
              </p>
            </div>
            <input
              type="number"
              className="inputStyle outline-none"
              {...register("numberOfPages")}
            />
          </div>
          <div className="flex-col-start gap-y-2 my-2 w-full">
            <div className="  flex justify-between items-center">
              <span className=" text-xs">Image </span>
              <p className="ml-1 text-red-500 text-xs">
                {errors.imageSrc && <span>Required Filed</span>}
              </p>
            </div>
            <input
              type="file"
              className="inputStyle outline-none"
              {...register("imageSrc")}
            />
          </div>
        </div>

        <div className="flex-col-start gap-y-1 my-2 w-full">
          <div className="  flex justify-between items-center">
            <span className=" text-xs">Category</span>
            <p className="ml-1 text-red-500 text-xs">
              {errors.category && <span>Required Filed</span>}
            </p>
          </div>
          {/* <input className='inputStyle' {...register("category")} /> */}
          <select
            className="w-full border border-slate-600 rounded-md p-2"
            {...register("category")}
          >
            <option value="">Select Category</option>
            <option value="children">children</option>
            <option value="Novel">Novel</option>
            <option value="Biography">Biography</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="flex-col-start gap-y-2 w-full my-2">
          <div className="  flex justify-between items-center">
            <span className=" text-xs">Language</span>
            <p className="ml-1 text-red-500 text-xs">
              {errors.language && <span>Required Filed</span>}
            </p>
          </div>
          <select
            className="w-full border border-slate-600 rounded-md p-2"
            {...register("language")}
          >
            <option value="">Select Language</option>
            <option value="female">English</option>
            <option value="male">Bangla</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex-col-start gap-y-2 w-full my-2">
          <div className="  flex justify-between items-center">
            <span className=" text-xs">Description</span>
            <p className="ml-1 text-red-500 text-xs">
              {errors.description && <span>Required Filed</span>}
            </p>
          </div>
          <textarea className="inputStyle outline-none" {...register("description")} />
        </div>

        <CustomButton
          disabled={btnDisabled}
          label={btnDisabled ? "Posting..." : "SUBMIT"}
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