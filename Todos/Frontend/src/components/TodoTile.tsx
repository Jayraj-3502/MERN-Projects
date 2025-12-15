import React from "react";

interface TodoTileProps {
  title: string;
  onEdit: () => void;
  onDelete: () => void;
}

function TodoTile({
  title = "",
  onEdit = () => {},
  onDelete = () => {},
}: TodoTileProps) {
  return (
    <div className="group relative flex items-center justify-between rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300"></div>

      {/* Content wrapper */}
      <div className="relative flex items-center justify-between w-full">
        {/* Todo Title with icon */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-125 transition-transform duration-300"></div>
          <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
            {title}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 ml-4">
          <button
            onClick={onEdit}
            className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 active:scale-95 transition-all duration-200 before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-20 before:transition-opacity"
          >
            <span className="relative z-10">Edit</span>
          </button>

          <button
            onClick={onDelete}
            className="relative overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-700 active:scale-95 transition-all duration-200 before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-20 before:transition-opacity"
          >
            <span className="relative z-10">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoTile;
