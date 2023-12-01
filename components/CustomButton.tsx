'use client';

import { IconType } from "react-icons";

interface IButton {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  type?: 'button' | 'submit';
  small?: boolean;
  icon?: IconType;
}

const CustomButton: React.FC<IButton> = ({
  label,
  onClick,
  disabled,
  outline,
  type,
  small,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        px-2 my-4
        ${outline ? 'bg-white' : ' bg-light_green'}
        ${outline ? 'border-light_green' : 'border-light_green'}
        ${outline ? 'text-slate-700 text-base' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
            
          "
        />
      )}
      {label}
    </button>
  );
}

export default CustomButton;