"use client";

function Form({ action = "", onSubmit = "", children, ...rest }) {
  return (
    <form
      onSubmit={onSubmit}
      action={action}
      className="flex flex-col gap-4"
      {...rest}
    >
      {children}
    </form>
  );
}

export default Form;
