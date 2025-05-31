import React, { forwardRef, useState } from 'react'

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
function InputText({
    type ="text",
    className,
    error,
    ...props
}, ref) {
    const [showPassword, setShowPassword] = useState(false)
    // not support type
    if (type === "radio" || type === "checkbox") {
    console.warn("InputBox does not support 'radio' or 'checkbox' types.")
    return null
  }
  const isPassword = type ==="passwoord";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;
    return (
        <div className='relative w-full'>
            <input type={inputType}
                ref={ref}
                className={cn(
          "w-full border-2 rounded-md py-2 px-3 text-sm",
          "bg-white text-neutral-900 border-neutral-300",
          "dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700",
          "focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white",
          error && "border-red-500 dark:border-red-400 focus:ring-red-500",
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
       {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>


    )
}

export default InputText