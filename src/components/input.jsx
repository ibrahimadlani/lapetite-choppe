import React from "react";

const Input = ({ label, subtitle, className, textarea, ...props }) => {
  const sharedStyles =
    "block w-full border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6 crimson font-medium";

  return (
    <div className={className}>
      <div className="border-s-[5px] ps-[5px] border-red-800">
        <label className="block leading-6 text-gray-900 antonio font-bold tracking-widest">
          {label.toUpperCase()}
        </label>
        <p className="crimson text-gray-500 text-sm">{subtitle}</p>
      </div>
      <div className="mt-2">
        {textarea ? (
          <textarea {...props} className={sharedStyles} rows="3"></textarea>
        ) : (
          <input {...props} className={sharedStyles} />
        )}
      </div>
    </div>
  );
};

export default Input;
