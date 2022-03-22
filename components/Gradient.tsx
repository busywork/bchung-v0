import React from 'react';

type GradientProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<'span'>;

const Gradient = ({ children, className = '' }: GradientProps) => {
  return (
    <span
      className={`${className} font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 dark:from-pink-300 dark:via-purple-300 dark:to-indigo-400`}
    >
      {children}
    </span>
  );
};

export default Gradient;
