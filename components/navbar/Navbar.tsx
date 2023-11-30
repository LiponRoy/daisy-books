"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLink } from "@/constants";
import { FiMenu } from "react-icons/fi";
import { BsFillCartDashFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { Logo } from "..";
import CustomButton from "../CustomButton";
import useLoginModalStore from "@/hooks/useLoginModalStore";
import { SafeUser } from "@/types/ndex";
import { signOut } from "next-auth/react";
import usePostBookModalStore from "@/hooks/usePostBookModalStore";
import { useRouter } from "next/navigation";
import useCartStore from "@/hooks/useCartStore";

interface navbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: navbarProps) => {
  const router = useRouter()
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
      <div
        className={`flex-between py-2 px-6 bg-off-white ${currentUser && "border-b-2 border-light_green"
          }`}
      >
        <Logo />

        <div className="hidden md:flex justify-center items-center">
          <div onClick={() => router.push("/cart_detail")} className=" pr-4 text-light_green cursor-pointer">
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
        <div className="md:hidden cursor-pointer flex-center z-10">
          <div className=" pr-4 text-light_green">
            <BsFillCartDashFill size={24} />
          </div>
          <div onClick={toggleState}>
            {toggle ? <ImCross /> : <FiMenu size={24} />}

            {toggle && (
              <div
                className={`${toggle ? "toggleContainer" : "toggleContainerHidden"
                  }`}
              >
                {navLink.map((nav) => (
                  <div key={nav.id} className=" m-1 uppercase text-white">
                    <Link href={nav.url}>{nav.title}</Link>
                  </div>
                ))}
                <div className=" gap-x-2">
                  {currentUser ? (
                    <div className=" flex flex-col justify-center items-center gap-1">

                      <CustomButton
                        small
                        outline
                        label="PostBook"
                        onClick={postBookModalStore.onOpen}
                      />
                      <CustomButton
                        label="LogOut"
                        small
                        outline
                        onClick={() => signOut()}
                      />
                    </div>
                  ) : (
                    <CustomButton
                      label="LOGIN"
                      outline
                      onClick={LoginModalStore.onOpen}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
