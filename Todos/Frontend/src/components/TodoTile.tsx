import { MdDelete } from "react-icons/md";
import { FaCircleInfo, FaInfo } from "react-icons/fa6";

interface TodoTileProps {
  title: string;
  onClick: () => void;
  onInfo: () => void;
  onDelete: (event: any) => void;
}

function TodoTile({
  title = "",
  onInfo = () => {},
  onDelete = (event: any) => {},
  onClick = () => {},
}: TodoTileProps) {
  return (
    <div
      className="group relative flex items-center justify-between rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 py-3 px-5 shadow-sm cursor-pointer "
      onClick={onClick}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 rounded-2xl "></div>

      {/* Content wrapper */}
      <div className="relative flex items-center justify-between w-full">
        {/* Todo Title with icon */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-125 transition-transform duration-300"></div>
          <h3 className="text-lg font-medium text-black truncate ">{title}</h3>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 ml-4">
          <button
            onClick={onInfo}
            className="text-xl p-1.5 bg-blue-500 hover:bg-blue-700 text-white rounded-full cursor-pointer"
          >
            <FaInfo />
          </button>
          <button
            onClick={onDelete}
            className="text-xl p-1.5 bg-red-500 hover:bg-red-700 text-white rounded-full cursor-pointer"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoTile;
