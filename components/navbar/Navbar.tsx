"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLink } from "@/constants";
import { FiMenu } from "react-icons/fi";
import { BsFillCartDashFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { Logo } from "..";
import CustomButton from "../CustomButton";
import useLoginModalStore from "@/hooks/useLoginModalStore";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import usePostBookModalStore from "@/hooks/usePostBookModalStore";
import { useRouter } from "next/navigation";
import useCartStore from "@/hooks/useCartStore";


interface navbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: navbarProps) => {
  const router = useRouter();
  const { cartProducts } = useCartStore();

  const LoginModalStore = useLoginModalStore();
  const postBookModalStore = usePostBookModalStore();

  const [toggle, setToggle] = useState<boolean>(false);

  const toggleState = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <>
      <div className="flex-between py-1 px-6 bg-off-white border-b-2 border-light_green">
        <Logo />

        <div className="hidden md:flex justify-between items-center">
          <div
            onClick={() => router.push("/cart_detail")}
            className=" pr-4 text-light_green cursor-pointer"
          >
            <div className="flex justify-center items-center gap-x-1">
              <span>{cartProducts.length}</span>
              <BsFillCartDashFill size={24} />
            </div>
          </div>
          {navLink.map((nav) => (
            <div key={nav.id} className=" m-1 uppercase">
              <Link href={nav.url}>{nav.title}</Link>
            </div>
          ))}

          <div className=" gap-x-2">
            {currentUser ? (
              <div className=" mx-2 flex justify-center items-center gap-x-2">
                <CustomButton
                  small
                  outline
                  label="PostBook"
                  onClick={postBookModalStore.onOpen}
                />
                <CustomButton
                  small
                  outline
                  label="LogOut"
                  onClick={() => signOut()}
                />
              </div>
            ) : (
              <div className=" mx-1">
                <CustomButton
                  label="LOGIN"
                  small
                  outline
                  onClick={LoginModalStore.onOpen}
                />
              </div>
            )}
          </div>
        </div>

        {/* mobile part */}
        <div className=" md:hidden">

          <div
            className={`${toggle && " fixed inset-0 bg-black/70 full-page-center z-40"
              }`}
          >
            <div className="md:hidden flex-center z-50">
              <div>

                <div onClick={toggleState} className="cursor-pointer">
                  {!toggle && <FiMenu size={24} />}
                </div>
                {toggle && (
                  <div
                    className={`${toggle
                        ? " absolute top-28 bottom-80 right-0 flex-col-center bg-slate-200 p-8 rounded-md opacity-100 border-2"
                        : " hidden opacity-0"
                      }`}
                  >

                    <div onClick={toggleState} className="absolute -top-7 -left-7 text-white cursor-pointer rounded-full border-4 border-light_green animate-spin hover:animate-none">
                      <RxCrossCircled size={28} />
                    </div>



                    <span className=" text-slate-500 border-b-2 border-light_green text-lg font-semibold mb-4"> Choose Path</span>

                    <div className=" gap-x-2">


                      {currentUser ? (
                        <div className="flex-col-center gap-y-4 text-slate-600">

                          <span
                            className=" cursor-pointer flex-center"
                            onClick={() => {
                              router.push("/");
                              setToggle(false);
                            }}
                          >
                            Home


                          </span>
                          <span
                            className=" cursor-pointer"
                            onClick={() => {
                              postBookModalStore.onOpen();
                              setToggle(false);
                            }}
                          >
                            PostBook
                          </span>
                          <span
                            className=" cursor-pointer"
                            onClick={() => {
                              router.push("/cart_detail");
                              setToggle(false);
                            }}
                          >
                            Cart Detail
                          </span>

                          <span
                            className=" cursor-pointer"
                            onClick={() => {
                              signOut();
                              setToggle(false);
                            }}
                          >
                            LogOut
                          </span>
                        </div>
                      ) : (
                        <div className="flex-col-center gap-y-4 text-slate-600">
                          <span
                            className=" cursor-pointer"
                            onClick={() => {
                              router.push("/");
                              setToggle(false);
                            }}
                          >
                            Home
                          </span>
                          <span
                            className=" cursor-pointer"
                            onClick={() => {
                              LoginModalStore.onOpen();
                              setToggle(false);
                            }}
                          >
                            LOGIN
                          </span>
                          <span
                            className=" cursor-pointer"
                            onClick={() => {
                              router.push("/cart_detail");
                              setToggle(false);
                            }}
                          >
                            Cart Detail
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="bg-light_green w-full h-2 absolute left-0 right-0 bottom-0 rounded-md"></div>

                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
