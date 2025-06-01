import React, { forwardRef, useState } from "react";

// Utility function to merge class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const InputText = forwardRef(function InputText(
  { type = "text", className, error, ...props },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);

  // Prevent unsupported types
  if (type === "radio" || type === "checkbox") {
    console.warn("InputText does not support 'radio' or 'checkbox' types.");
    return null;
  }

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        ref={ref}
        className={cn(
          "w-full rounded-md py-2 px-3 text-sm border-2 transition-colors",
          // Light mode
          "bg-white text-neutral-900 border-neutral-300",
          // Dark mode
          "dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700",
          // Focus ring
          "focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-100",
          // Error styles
          error &&
            "border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400",
          className
        )}
        {...props}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm"
          tabIndex={-1}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}

      {error && (
        <p className="mt-1 text-xs text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
});

export default InputText;
