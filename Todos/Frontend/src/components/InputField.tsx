function InputField({
  type = "",
  id = "",
  label = "",
  placeholder = "",
  errors = {} as any,
  register = {},
}) {
  return (
    <div className="flex flex-col gap-1 max-w-[300px] w-full ">
      <label htmlFor={id}>{label}</label>
      <input
        required
        className="outline-none border border-gray-300 p-3 rounded-sm focus:border-gray-500"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
      />
      <p className="text-red-500 mt-1">{errors[id]?.message}</p>
    </div>
  );
}

export default InputField;
