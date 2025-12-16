import type { MouseEventHandler, ReactNode } from "react";

interface AscDescButtonProps {
  title: string;
  onClick: MouseEventHandler;
}

function AscDescButton({
  title = "",
  onClick = () => {},
}: AscDescButtonProps): ReactNode {
  return (
    <button
      onClick={onClick}
      className="border-none outline-none px-3 py-1 text-[12px] text-white font-semibold hover:bg-blue-700 bg-blue-500 rounded-full"
    >
      {title}
    </button>
  );
}

export default AscDescButton;
