import { IoMenu } from "react-icons/io5";

interface NavBarProps {
  src: string;
}

function NavBar({ src = "" }: NavBarProps) {
  return (
    <div className="flex flex-row justify-between items-center px-5 py-3">
      <div>
        <IoMenu className="text-2xl font-bold " />
      </div>
      <div>
        <div>
          <div className="bg-gray-500 h-10 w-10 rounded-full">
            <img src="asd" alt="avtar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
