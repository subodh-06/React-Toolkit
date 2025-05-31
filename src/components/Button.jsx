import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Tailwind variant classes (light + dark mode)
const variantClasses = {
  default:
    'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200',

  primary:
    'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',

  secondary:
    'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',

  destructive:
    'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',

  outline:
    'border border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800',

  ghost:
    'text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800',

  link:
    'text-blue-600 underline underline-offset-4 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
};

// Base styling for all buttons
const baseClasses =
  'inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none';

const Button = ({
  children,
  variant = 'default',
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={clsx(
        baseClasses,
        variantClasses[variant] || variantClasses.default,
        className
      )}
      {...props}
    >
      {isLoading && (
        <>
          <span className="animate-spin w-4 h-4 border-2 border-t-transparent rounded-full mr-2" />
          Loading...
        </>
      )}
      {!isLoading && children}
    </button>
  );
};

// ✅ Updated PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'destructive',
    'outline',
    'ghost',
    'link',
  ]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
