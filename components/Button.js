function Button({ children, type, disabled, onClickHandler }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={typeof onClickHandler === "function" ? onClickHandler : () => {}}
      className={`bg-green-800 text-gray-100 px-4 py-2 rounded hover:bg-green-700 my-2 ${
        disabled && "bg-gray-100 tex-black-100"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
