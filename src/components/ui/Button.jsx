import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-full font-medium transition-all inline-flex items-center justify-center";

  const variants = {
    primary: "bg-dark text-white hover:bg-dark/80 shadow-sm hover:shadow-md",
    secondary: "bg-white text-dark border border-[#e2e2ea] hover:bg-[#f4f4f9]",
    outline: "border-2 border-dark text-dark hover:bg-dark hover:text-white",
    ghost: "text-dark hover:bg-[#f4f4f9]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
