function FormButton({
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  return (
    <button
      className={`flex items-center gap-2 py-1 px-3 cursor-pointer transition-all duration-300 rounded ${
        variant === "primary"
          ? "bg-primary-500 text-white hover:bg-primary-600"
          : "bg-gray-200 border border-gray-300 hover:bg-gray-300"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default FormButton;
