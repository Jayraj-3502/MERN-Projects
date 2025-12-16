import { MdDelete } from "react-icons/md";

interface TodoTileProps {
  title: string;
  onEdit: () => void;
  onDelete: () => void;
}

function TodoTile({ title = "", onDelete = () => {} }: TodoTileProps) {
  return (
    <div className="group relative flex items-center justify-between rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 py-3 px-5 shadow-sm cursor-pointer ">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>

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
