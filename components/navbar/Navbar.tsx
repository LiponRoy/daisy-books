'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { navLink } from '@/constants';
import { FiMenu } from 'react-icons/fi';
import { BsFillCartDashFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { Logo } from '..';
import useRegisterModalStore from '@/hooks/useRegisterModalStore';
import CustomButton from '../CustomButton';
import useLoginModalStore from '@/hooks/useLoginModalStore';
import { SafeUser } from '@/types/ndex';
import { signOut } from 'next-auth/react';

interface navbarProps {
    currentUser?: SafeUser | null;
  }

const Navbar = ({currentUser}:navbarProps) => {

    const RegisterModalStore = useRegisterModalStore();
    const LoginModalStore = useLoginModalStore();
    
    const [toggle, setToggle] = useState<boolean>(false);

    const toggleState = () => {
        setToggle(!toggle);
        console.log(toggle);
    };

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
                        {currentUser?(<CustomButton
                            label="LogOut"
                            outline
                            onClick={()=>signOut()}
                        />):(<CustomButton
                            label="LOGIN"
                            outline
                            onClick={LoginModalStore.onOpen}
                        />)}
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
                                   {
                                    currentUser?( 
                                    <CustomButton
                                        label="LogOut"
                                        // outline
                                        onClick={()=>signOut()}
                                    />):( 
                                    <CustomButton
                                        label="LOGIN"
                                        outline
                                        onClick={LoginModalStore.onOpen}
                                    />)
                                   }
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
