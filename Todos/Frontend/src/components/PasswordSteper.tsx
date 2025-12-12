function PasswordSteper({
  stepDetails = [{ number: 0, title: "", status: "" }],
}) {
  return (
    <div className="flex justify-between mb-6">
      {stepDetails.map((value) => (
        <div className={`${value.number === 3 ? "" : "w-full"}`}>
          <div
            className={`flex items-center ${
              value.number === 3 ? "" : "w-full"
            }`}
          >
            <div className="w-7 h-7 shrink-0 mx-[-1px] bg-blue-600 flex items-center justify-center rounded-full">
              <span className="text-sm text-white font-semibold">
                {value.number}
              </span>
            </div>
            {value.number === 3 ? (
              ""
            ) : (
              <div className="w-full h-[3px] mx-4 rounded-lg bg-blue-600"></div>
            )}
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-sm font-semibold text-blue-600">
              {value.title}
            </h6>
            <p className="text-xs font-bold text-gray-500">{value.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PasswordSteper;
