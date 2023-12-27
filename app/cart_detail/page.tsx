"use client";
import ClientOnly from "@/components/ClientOnly";
import CustomButton from "@/components/CustomButton";
import useCartStore from "@/hooks/useCartStore";
import { IBook } from "@/types";
import Image from "next/image";
import { it } from "node:test";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter()
  const {
    cartProducts,
    removeItemFromCart,
    incrementCart,
    decrementCart,
    allCartRemove,
  } = useCartStore();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [myTotalPrice, setMyTotalPrice] = useState(0);

  useEffect(() => {
    const totalQuantity = cartProducts.reduce((prev, next) => {
      return prev + next.cartQuantity;
    }, 0);

    const totalPrice = cartProducts.reduce((prev, next) => {
      const totalPrice = prev + next.cartQuantity * next.price;
      return totalPrice;
    }, 0);

    setTotalQuantity(totalQuantity);
    setMyTotalPrice(totalPrice);
  }, [cartProducts]);

  useEffect(() => {
    // set total price to store to get from checkout page or other
    useCartStore.setState((state) => ({
      totalPrice: myTotalPrice ? myTotalPrice : 0

    }))

  }, [myTotalPrice])

  const deleteItem = (item: IBook) => {
    removeItemFromCart(item);
  };

  const incrementItem = (item: IBook) => {
    incrementCart(item);
  };

  const decrementItem = (item: IBook) => {
    decrementCart(item);
  };


  const goCheckoutPage = () => {
    router.push("/checkout")
  };

  // const total

  return (
    <>
      <ClientOnly>
        <div className="mt-24 container ">
          <div className=" grid grid-cols-1 md:grid-cols-6 ">
            <div className=" col-span-4 mx-8 my-1">
              {cartProducts &&
                cartProducts.map((item) => (
                  <div className=" flex justify-between items-center p-1 my-2 bg-off_white border border-light_green rounded-md shadow">
                    <Image
                      src={item.imageSrc}
                      width="200"
                      height="200"
                      alt="no pic"
                      className=" basis-20 w-full h-28"
                    />
                    <div className="basis-[25%]  flex flex-col justify-start ">
                      <span className="hidden md:flex text-base font-medium text-slate-600 uppercase">
                        {item.title}
                      </span>

                      <span className=" ml-2 md:ml-0">
                        {item.price} <span className=" ml-1">TK</span>{" "}
                      </span>
                    </div>

                    <div className="basis-[25%] flex flex-col md:flex-row justify-center items-center gap-x-1 ml-4 ">
                      <div
                        onClick={() => incrementItem(item)}
                        className=" text-light_green cursor-pointer "
                      >
                        <FaSquarePlus size={26} />
                      </div>
                      <span className=" mx-2">{item.cartQuantity}</span>
                      <div
                        onClick={() => decrementItem(item)}
                        className={` ${item.cartQuantity === 1
                          ? "text-slate-400 cursor-not-allowed"
                          : "text-light_green cursor-pointer"
                          }`}
                      >
                        <FaSquareMinus size={26} />
                      </div>
                    </div>
                    <div
                      onClick={() => deleteItem(item)}
                      className="basis-[10%] cursor-pointer ml-6 text-slate-600"
                    >
                      <RiDeleteBin6Line size={26} />
                    </div>
                  </div>
                ))}
            </div>
            <div className=" col-span-2">
              <div className=" relative flex flex-col justify-start items-center bg-off_white border border-light_green rounded-md shadow mx-8 my-3 gap-y-3 mt-3 p-4 ">
                <span className="text-slate-600 text-start px-4 uppercase font-semibold text-xl mb-6 w-full">
                  total calculation
                </span>
                <div className="flex justify-between items-center w-full px-4">
                  <span className=" text-xl text-slate-600 font-semibold">
                    Total Product:{" "}
                  </span>
                  <span className=" text-xl text-slate-700 font-semibold">
                    {cartProducts.length}{" "}
                  </span>
                </div>
                <div className="flex justify-between items-center w-full px-4">
                  <span className=" text-xl text-slate-600 font-semibold">
                    Total Quantity:{" "}
                  </span>
                  <span className="ml-2 text-lg text-slate-700 font-semibold">
                    {totalQuantity}
                  </span>
                </div>
                <div className="flex justify-between items-center w-full px-4">
                  <span className=" text-xl text-slate-600 font-semibold">
                    Total Price:{" "}
                  </span>
                  <span className="ml-2 text-lg text-slate-700 font-semibold">
                    {myTotalPrice}
                    <span className=" ml-2 text-slate-500">TK</span>
                  </span>
                </div>
                <div onClick={goCheckoutPage} className=" w-[80%]">
                  <CustomButton outline label="Proceed to checkout" />
                </div>
                <div
                  onClick={allCartRemove}
                  className=" absolute -bottom-12 right-0  bg-light_green p-2 rounded-md text-white cursor-pointer "
                >
                  <span >Remove All Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientOnly>
    </>
  );
};

export default page;
