import { FC } from "react";
import './button.scss';
type TButton = {
    text: string;
    onClick?: () => void
}
export const Button:FC<TButton> = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="btn">{text}</button>
  )
}
