function PrimaryButton({ text = "" }) {
  return (
    <div>
      <button
        type="submit"
        className="bg-blue-500 border-none outlet-none text-white font-semibold py-2 w-full rounded-md"
      >
        {text}
      </button>
    </div>
  );
}

export default PrimaryButton;
