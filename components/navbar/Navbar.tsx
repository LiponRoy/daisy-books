'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navLink } from '@/constants';
import { FiMenu } from 'react-icons/fi';
import { BsFillCartDashFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { Logo } from '..';
import useAuthModalStore from '@/hooks/useAuthModalStore';
import CustomButton from '../CustomButton';

const Navbar = () => {
    const authModalStore = useAuthModalStore();
    const [toggle, setToggle] = useState<boolean>(false);

    const toggleState = () => {
        setToggle(!toggle);
        console.log(toggle);
    };
    console.log(authModalStore.isOpen);

    return (
        <>
            <div className="w-full flex-between py-2 px-6 bg-off-white border-b border-light_green">
                <Logo />

                <div className="hidden md:flex justify-center items-center">
                    <div className=" pr-4 text-light_green">
                        <BsFillCartDashFill size={24} />
                    </div>
                    {navLink.map((nav) => (
                        <div key={nav.id} className=" m-1 uppercase">
                            <Link href={nav.url}>{nav.title}</Link>
                        </div>
                    ))}

                    <div className=" gap-x-2">
                        <CustomButton
                            label="LOGIN"
                            outline
                            onClick={authModalStore.onOpen}
                        />
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
                                className={`${toggle ? 'toggleContainer' : 'toggleContainerHidden'
                                    }`}
                            >
                                {navLink.map((nav) => (
                                    <div key={nav.id} className=" m-1 uppercase text-white">
                                        <Link href={nav.url}>{nav.title}</Link>
                                    </div>
                                ))}
                                <div className=" gap-x-2">
                                    <CustomButton
                                        label="LOGIN"
                                        outline
                                        onClick={authModalStore.onOpen}
                                    />
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
