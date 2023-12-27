import { FC } from 'react';
import './input.scss'
type TInput = { 
    type: string;
    placeholder?: string;
    disabled?: boolean;
}

export const Input:FC<TInput> = ({type, placeholder,disabled}) => {
  return (
    <input className='input' type={type} placeholder={placeholder}  disabled={disabled}/>
  )
}
