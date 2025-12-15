function PasswordSteper({
  valueNumber = 0,
  valueTitle = "",
  valueStatus = "Pending",
}) {
  return (
    <div className={`${valueNumber === 3 ? "" : "w-full"}`}>
      <div className={`flex items-center ${valueNumber === 3 ? "" : "w-full"}`}>
        <div className="w-7 h-7 shrink-0 mx-[-1px] bg-blue-600 flex items-center justify-center rounded-full">
          <span className="text-sm text-white font-semibold">
            {valueNumber}
          </span>
        </div>
        {valueNumber === 3 ? (
          ""
        ) : (
          <div className="w-full h-[3px] mx-4 rounded-lg bg-blue-600"></div>
        )}
      </div>
      <div className="mt-2 mr-4">
        <h6 className="text-sm font-semibold text-blue-600">{valueTitle}</h6>
        <p className="text-xs font-bold text-gray-500">{valueStatus}</p>
      </div>
    </div>
  );
}

export default PasswordSteper;
