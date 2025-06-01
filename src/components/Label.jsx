import React, { useEffect, useRef, useState } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

function Label({
  htmlFor,
  children,
  className,
  required = false,
  description = "",
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    const el = document.getElementById(htmlFor)
    if (!el) return

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)

    el.addEventListener("focus", handleFocus)
    el.addEventListener("blur", handleBlur)

    return () => {
      el.removeEventListener("focus", handleFocus)
      el.removeEventListener("blur", handleBlur)
    }
  }, [htmlFor])

  return (
    <div className="mb-1">
      <label
        htmlFor={htmlFor}
        className={cn(
          "block text-sm font-medium transition-colors",
          "text-neutral-800 dark:text-neutral-200",
          isFocused && "text-black dark:text-white",
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="text-pink-600 ml-0.5">*</span>}
      </label>

      {description && (
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
          {description}
        </p>
      )}
    </div>
  )
}

export default Label
