import { ButtonHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={twMerge(
        clsx(
          'px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105',
          {
            'bg-valentine-primary text-valentine-light hover:bg-valentine-secondary hover:shadow-lg':
              variant === 'primary',
            'bg-valentine-light text-valentine-primary border-2 border-valentine-primary hover:bg-valentine-primary hover:text-valentine-light hover:shadow-lg':
              variant === 'secondary',
          },
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
}; 