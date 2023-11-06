import React from 'react';
import { ImCross } from 'react-icons/im';


interface ImodalProps {
    isModalOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isModalOpen, onClose, children }: ImodalProps) => {
    return (
        isModalOpen && (
            <div className=" fixed inset-0 bg-black/70 full-page-center z-50">
                <div className="relative w-[80%] h-[70%]  md:w-[70%] lg:w-[30%]  flex-col-center bg-white rounded-md ">
                    {children}
                    <span onClick={onClose} className=" absolute top-[5%] right-[5%] cursor-pointer text-slate-500">
                        <ImCross />
                    </span>
                </div>
            </div>
        )
    );
};

export default Modal;
