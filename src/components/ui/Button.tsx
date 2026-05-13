import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  [key: string]: any;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "border border-white/20 text-white hover:bg-white/10",
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
