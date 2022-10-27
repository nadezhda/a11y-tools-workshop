import { FunctionComponent, HTMLAttributes } from 'react';
import './button.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ text, ...props }) => (
  <button className="button" {...props}>
    {text}
  </button>
);
