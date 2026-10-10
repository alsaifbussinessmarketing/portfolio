import React from "react";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none cursor-pointer";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow-md",
    secondary:
      "bg-heading text-white hover:bg-opacity-90",
    outline:
      "border border-border-subtle hover:border-primary text-heading hover:text-primary bg-transparent",
    ghost:
      "text-heading hover:text-primary bg-transparent hover:bg-primary-light",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-md",
    lg: "px-8 py-4 text-lg rounded-lg",
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