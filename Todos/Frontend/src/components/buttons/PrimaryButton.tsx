function PrimaryButton({ text = "", type = "submit", onClick = () => {} }) {
  return (
    <div>
      <button
        type={type as "submit"}
        className="bg-blue-500 border-none outlet-none text-white font-semibold py-2 px-5 w-full rounded-md hover:cursor-pointer"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default PrimaryButton;
