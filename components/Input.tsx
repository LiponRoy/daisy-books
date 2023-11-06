'use client';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type,
    disabled,
    register,
    required,
    errors,
}) => {
    return (
        <>

            <div className=' mx-2'>
                <span className=' text-sm text-slate-500'>{label}</span>
                <input
                    id={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    placeholder=" "
                    type={type}
                    className={`
          my-1
          w-full
          p-4
          font-light 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
                />
            </div>
        </>
    );
};

export default Input;
