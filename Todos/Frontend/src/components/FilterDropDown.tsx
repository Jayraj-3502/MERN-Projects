import { useEffect, useRef, useState } from "react";
import { BsFilterRight } from "react-icons/bs";

export default function FilterDropDown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleMenuItemClick(event: any) {
    console.log(event.target.innerText);
  }

  return (
    <div className="relative inline-block text-left w-fit" ref={dropdownRef}>
      {/* Trigger Text */}
      <button onClick={() => setOpen(!open)}>
        <BsFilterRight className="text-2xl font-bold text-black hover:scale-110" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-48 rounded-md bg-white shadow-lg border border-gray-200 z-50">
          <ul className="py-1 text-sm text-gray-700">
            {["Last Modified", "Due Date", "Creation"].map((item) => (
              <FilterListItems
                key={item}
                title={item}
                onClick={(event: any) => {
                  handleMenuItemClick(event);
                  setOpen(false);
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function FilterListItems({ title = "", onClick = (event: any) => {} }) {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {title}
    </li>
  );
}
