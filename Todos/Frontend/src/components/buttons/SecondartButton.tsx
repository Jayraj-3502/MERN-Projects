function SecondartButton({
  text = "",
  type = "submit",
  onClick = () => {},
  color = "",
}) {
  return (
    <div>
      <button
        type={type as "button"}
        className={`bg-black border-none outlet-none text-white font-semibold py-2 px-5 w-full rounded-md`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default SecondartButton;
