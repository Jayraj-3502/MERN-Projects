import { Component, useEffect } from "react";
import SecondartButton from "./buttons/SecondartButton";

const Popup = ({
  isOpen = false,
  title = "",
  children = "",
  onClose = () => {},
  footer = <></>,
}) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white shadow-lg">
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b px-5 py-3">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <SecondartButton text="X" type="button" onClick={onClose} />
          </div>
        )}

        {/* Content */}
        <div className="px-5 py-4 text-gray-700">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex justify-end gap-2 border-t px-5 py-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
