function Pagination() {
  return (
    <div className="flex flex-row gap-3 justify-center items-center mt-5">
      <div>
        <button className="border-none rounded-full px-3 py-2 font-semibold text-white cursor-pointer bg-blue-500 hover:bg-blue-700">
          Prev
        </button>
      </div>
      <div>1/10</div>
      <div>
        <button className="border-none rounded-full px-3 py-2 font-semibold text-white cursor-pointer bg-blue-500 hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
